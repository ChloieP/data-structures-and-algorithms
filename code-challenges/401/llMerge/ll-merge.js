'use strict';

const node = require

llMerge(l1, l2) {
  let l1 = l1.head;
  let l2 = l2.head;
  let head1 = '';
  let head2 = '';
  while (l1.next || l2.next) {
    head1 = l1.next;
    l1 = l2;
    l1 = head1;
    head2 = l2.next;
    l2.next = head1;
    l2 = head2;
  }
  return l1;
  }