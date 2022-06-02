"use strict";
//ES5
function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.Edit = function(text) {
 this.text = text; 
}

function AttachedPost(author, text, date, highlighted = false) {
  Post.call(this, author, text, date);
  this.highlighted = highlighted;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function(){
  this.highlighted = true;
}


let p = new Post('Alex', 'ES5', '31-05-2022');
let a = new AttachedPost('Adam', 'Lorem ipsum', '31-05-2022');
console.log(p);
console.log(a);
p.Edit('ES5 Edit');
a.Edit('Lorem ipsum dolor');
console.log(p);
console.log(a);

a.makeTextHighlighted();
console.log(a);

//ES6
class AmazingPost{
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }
  Edit(text) {
    this.text = text;
  }
}

class AmazingAttachedPost extends Post {
  constructor(author, text, date, highlighted = false) {
    super(author, text, date);
    this.highlighted = highlighted;
  }
  makeTextHighlighted() {
    this.highlighted = true;
  }
}

let p1 = new AmazingPost('User1', 'New post', '01-06-2022');
let a1 = new AmazingAttachedPost('User2', 'Newest post', '01-06-2022');
console.log(p1);
console.log(a1);
p1.Edit('New post edited ES6');
a1.Edit('Newest post edited ES6');
console.log(p1);
console.log(a1);
a1.makeTextHighlighted();
console.log(a1);