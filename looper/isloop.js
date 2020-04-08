'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  if (linkedlist == null) {
    return false;
  }

  let tortoise = linkedlist.head;
  let hare = tortoise;

  // tortoise.next && hare.next would work, but hare is faster anyways
  while(hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;

    if (tortoise === hare) {
      return true;
    }
  }

  return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
