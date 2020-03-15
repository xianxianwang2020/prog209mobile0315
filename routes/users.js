
var express = require('express');
var router = express.Router();

let serverItemArray = []; // our "permanent storage" on the web server

// define a constructor to create item objects  
var ItemObject = function (pID,pName, pCategory,pBrand, pCondition,pPrice, pOwner,pImageLink) {
  this.ID=pID;
  this.Name = pName;
  this.Category = pCategory;  // select list for category
  this.Brand=pBrand;
  this.Condition = pCondition;
  this.Price = pPrice;
  this.Owner = pOwner;
  this.ImageLink=pImageLink;
}

// for testing purposes, its nice to preload some data
serverItemArray.push(new ItemObject(100,"Vintage Carved Table","Furniture", "Other","good", 100,"xixi@email.com","https://drive.google.com/file/d/16jn966Z811FjGRcsq0XEvvVOZTmGu4e7/view"));
serverItemArray.push(new ItemObject(101,"Victoria Time Diamond Ring","Jewery", "Cartier","excellent", 5000,"Kthore2020@email.com","https://drive.google.com/file/d/1c-8hLqwfy2s398GDt9oFaoKiemIUezSX/view"));

serverItemArray.push(new ItemObject(102,"Eight Jade Necklace","Jewery", "Tiffany","good", 10000,"kateg@email.com","https://drive.google.com/file/d/1EyszXwkjyl-C10UcRXT2Gpx0yxDjkdyt/view"));
serverItemArray.push(new ItemObject(103,"Channel 2.55","Purse", "Other","excellent", 5000,"lovecoco@email.com","https://drive.google.com/file/d/1dVSNtEffSxjbsBmDZ4tqk9viO5fnRfbZ/view"));


/* POST to addItem */
router.post('/addItem', function(req, res) {
  console.log(req.body);
  serverItemArray.push(req.body);
  console.log(serverItemArray);
  //res.sendStatus(200);
  res.status(200).send(JSON.stringify('success'));
});


/* GET itemList. */
router.get('/itemList', function(req, res) {
  res.json(serverItemArray);
 });

 /* DELETE to deleteItem. */
 router.delete('/deleteItem/:ID', function(req, res) {
  let ID = req.params.ID;
  ID =parseInt(ID);
  console.log('deleting ID: ' + ID);
   for(let i=0; i < serverItemArray.length; i++) {
     if(ID== parseInt(serverItemArray[i].ID)) {
     serverItemArray.splice(i,1);
     }
   }
   res.status(200).send(JSON.stringify('deleted successfully'));
});


//  router.???('/userlist', function(req, res) {
//  users.update({name: 'foo'}, {name: 'bar'})



module.exports = router;

