var LocalStorage = {



/**
 * let aspirin = getDrugById('aspirin');
console.log(aspirin);
 */
// Retrieve a single object by drug.id:
getDrugById: function(key, drugId, icardId) {
    // Retrieve the current data from local storage
    // let data = JSON.parse(localStorage.getItem('tolearn')) || [];
    let data = this.decode(this.load(key), '[]') || [];

console.log('%c> data DBI:', "color:orange",  data);
console.log('%c> data DBI len:', "color:orange",  data.length);


    // if ('drug' in data) {

    // } else {
    //     return undefined;
    // }

    // Find the drug object by both drug.id and icard.id
    return data.find(item => item.drug.id === drugId && item.icard.id === icardId);
},

deleteDrugById: function(key, drugId, icardId) {
    // Retrieve the current data from local storage
    let data = this.decode(this.load(key)) || [];

    // Filter out the object that matches both drug.id and icard.id
    let updatedData = data.filter(item => !(item.drug.id === drugId && item.icard.id === icardId));

    // Save the updated data back to local storage
    // localStorage.setItem('drugData', JSON.stringify(updatedData));
    this.save(key, this.encode(updatedData));
},

deleteSavedSetById: function(key, setId) {
    // Retrieve the current data from local storage
    let data = this.decode(this.load(key)) || [];


    // Filter out the object that matches both drug.id and icard.id
    // let updatedData = data.filter(item => !(item.drug.id === drugId && item.icard.id === icardId));
    let updatedData = data.filter(item => item.name !== setId);;

    // Save the updated data back to local storage
    // localStorage.setItem('drugData', JSON.stringify(updatedData));
    this.save(key, this.encode(updatedData));
},


/**
 * let count = getDrugCount();
console.log(count); // Outputs the total number of drugs
 */
// Get the count of all objects:
getDrugCount: function(key) {
    let data = this.decode(this.load(key)) || [];
    return data.length;
},




/* =============================================================================
 * GENERIC METHOD BELOW
 * ===========================================================================*/





// Add a new single object:
addItem: function(key, itemObj) {

    const savedList = this.decode(this.load(key), '[]') || [];

console.log('%c> savedList:', "color:orange",  savedList);

    savedList.push(
        itemObj
    );

    this.save(key, this.encode(savedList));
},




  /*
        The following local storage is untested.
    */

  encode: function (obj) {
    // *** Converts a valid object to a json string.
    return JSON.stringify(obj);
  },

  decode: function (json, defaultReturn) {

    console.log('%c> defaultReturn:', "color:orange",  defaultReturn);

    if (typeof defaultReturn === "undefined") {
        var defaultReturn = '{}';
    }

    if (defaultReturn == '{}')
        // *** Converts a json string back to an object.
        return JSON.parse(json) || {};
    else if (defaultReturn == '[]') {
        return JSON.parse(json) || [];
    }
  },

  getStorageObject: function () {
    this.localStorage = window.localStorage;

    if (typeof this.localStorage === "undefined") {
        throw new Error("Local storage is not supported.");
    }

    return this.localStorage;
  },

  save: function (key, value) {
    // localStorage.setItem(key, value);
    //localStorage[key] = value;

    try {
      // *** Save some data to local storage
      this.getStorageObject().setItem(key, value);
    } catch (e) {
      if (e.name && e.name == "QUOTA_EXCEEDED_ERR") {
        if (this.getStorageObject().length == 0) {
          /*
           * On iOS devices, when "Private Browsing" mode is enabled, it is not possible
           * to store anything in localStorage. The only way we have to check for private
           * browsing mode at the moment, is to try and store something, then if it fails
           * check how many items (.length) are in localStorage - if none, probably in
           * private browsing mode.
           */

          console.log("Probably running in Private Browsing mode.");
        } else {
          // *** Clean the local storage
          console.log("localStorage CLEARED");
          this.clear();
        }
      }
    }
  },

  // _storeObj.decode(_storeObj.load('tolearn')) || [];
  load: function (key) {
    // return localStorage.getItem(key);
    //return localStorage[key];
    return this.getStorageObject().getItem(key);
  },

  remove: function (key) {
    // localStorage.removeItem(key);
    return this.getStorageObject().removeItem(key);
  },

  clear: function () {
    // localStorage.clear();
    console.log("Clearing localStorage");
    this.getStorageObject().clear();
  },

  list: function () {
    var tempArray = [];
    for (i = 0; i <= this.getStorageObject().length - 1; i++) {
      key = this.getStorageObject().key(i);
      val = this.getStorageObject().getItem(key);
      tempArray[key] = val;
    }
    return tempArray;
  },

  isSupported: function () {
    if (this.getStorageObject()) {
      return true;
    } else {
      return false;
    }
  },
};
