// Definition for singly-linked list:// function ListNode(x) {//   this.value = x;//   this.next = null;// }//function solution(l1, l2) {    let arr = [];    while ( l1 != null ){        arr.push(l1.value);        l1 = l1.next;    }    while ( l2 != null ){        arr.push(l2.value);        l2 = l2.next;    }    return arr.sort((a,b) => a-b);}