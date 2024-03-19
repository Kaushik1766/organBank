import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Time "mo:base/Time";
import List "mo:base/List";
import Bool "mo:base/Bool";
import Array "mo:base/Array";

actor DBank {

  type Organ = {
    alive : Bool;
    name : Text;
    age : Nat;
    organName : Text;
    hospital : Text;
    bloodGrp : Text;
    donorId : Text;
  };

  stable var organList : List.List<Organ> = List.nil<Organ>();
  stable var availableOrgans : List.List<Organ> = List.nil<Organ>();

  // consent form
  public func consentForm(name : Text, age : Nat, organName : Text, bloodGrp : Text, donorId : Text) {
    let newOrgan : Organ = {
      alive = true;
      name = name;
      age = age;
      organName = organName;
      hospital = "none";
      bloodGrp = bloodGrp;
      donorId = donorId;
    };
    organList := List.push(newOrgan, organList);
    Debug.print(debug_show (organList));
  };

  // display data
  public query func name() : async [Organ] {
    return List.toArray(organList);
  };

  // listing after death
  public func organListing(donorId : Text, hospital : Text) {
    var availOrgan = List.find<Organ>(
      organList,
      func(item) {
        return item.donorId == donorId;
      },
    );

    switch (availOrgan) {
      case null return;
      case (?availOrgan) {
        // availOrgan.alive :=false;
      };
    };

  };
};
