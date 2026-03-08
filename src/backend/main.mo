import Array "mo:core/Array";
import List "mo:core/List";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Int "mo:core/Int";

actor {
  type Submission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    service : Text;
    message : Text;
    timestamp : Int;
  };

  type PortfolioItem = {
    id : Nat;
    title : Text;
    category : Text;
    description : Text;
  };

  module Submission {
    public func compareByTimestamp(s1 : Submission, s2 : Submission) : Order.Order {
      Int.compare(s1.timestamp, s2.timestamp);
    };
  };

  module PortfolioItem {
    public func compare(a : PortfolioItem, b : PortfolioItem) : Order.Order {
      Text.compare(a.title, b.title);
    };
  };

  let submissionsList = List.empty<Submission>();
  let portfolioList = List.empty<PortfolioItem>();

  var submissionId = 0;
  var portfolioId = 0;
  var visitCounter = 0;

  public shared ({ caller }) func submitForm(name : Text, email : Text, phone : Text, service : Text, message : Text) : async Nat {
    let newSubmission : Submission = {
      id = submissionId;
      name;
      email;
      phone;
      service;
      message;
      timestamp = Time.now();
    };
    submissionsList.add(newSubmission);
    submissionId += 1;
    newSubmission.id;
  };

  public query ({ caller }) func getSubmissions() : async [Submission] {
    submissionsList.toArray().sort(Submission.compareByTimestamp);
  };

  public shared ({ caller }) func addPortfolioItem(title : Text, category : Text, description : Text) : async Nat {
    let newItem : PortfolioItem = {
      id = portfolioId;
      title;
      category;
      description;
    };
    portfolioList.add(newItem);
    portfolioId += 1;
    newItem.id;
  };

  public query ({ caller }) func getPortfolio() : async [PortfolioItem] {
    portfolioList.toArray().sort();
  };

  public shared ({ caller }) func incrementVisitCounter() : async () {
    visitCounter += 1;
  };

  public query ({ caller }) func getVisitCounter() : async Nat {
    visitCounter;
  };
};
