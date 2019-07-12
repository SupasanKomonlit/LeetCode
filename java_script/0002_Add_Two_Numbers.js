// FILE			: 02_Add_Two_Numbers.js
// AUTHOR		: K.Supasan
// CREATE ON	: 2019, July 11 (UTC+0)

// README

// REFERENCE
//  ref00   : https://leetcode.com/problems/add-two-numbers/
//  ref01   : https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571
//  ref02   : https://www.w3schools.com/jsref/jsref_pow.asp

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let temp_num = l1.val + l2.val ;
    let temp;
    if( temp_num > 9 )
    {
        temp = temp_num - 10;
        temp_num = 1;
    }
    else
    {
        temp = temp_num;
        temp_num = 0;
    }
    const answer = new ListNode( temp );
    l1 = l1.next;
    l2 = l2.next;    
    temp = answer;
    while( true )
    {
        let num_num = 0;
        if( l1 == null && l2 == null )
        {
            if( temp_num == 1 )
            {
                temp.next = new ListNode( 1 );
            }
            break;
        }
        else if( l1 == null )
        {
            new_num = l2.val ;
            l2 = l2.next;
        }
        else if( l2 == null )
        {
            new_num = l1.val;
            l1 = l1.next;
        }
        else
        {
            new_num = l1.val + l2.val ;
            l1 = l1.next;
            l2 = l2.next;
        }
        new_num += temp_num;
        if( new_num > 9 )
        {
            temp_num = 1;
            new_num -= 10;
        }
        else
        {
            temp_num = 0;
        }
        temp.next = new ListNode( new_num );
        temp = temp.next;
    }
    return answer;
};
