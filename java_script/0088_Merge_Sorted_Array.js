// FILE			: 0088_Merge_Sorted_array.js
// AUTHOR		: K.Supasan
// CREATE ON	: 2019, July 11 (UTC+0)

// README

// REFERENCE
//  ref00   : https://leetcode.com/problems/merge-sorted-array/
//  ref01   : https://www.w3schools.com/jsref/jsref_shift.asp
//  ref02   : https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly

var merge = function( nums1 , m , nums2 , n )
{
    for( let run = 0 ; run < n ; run++ )
            {
                            nums1[run+m] = nums2[run];
                        }
            nums1.sort((a, b) => a - b);
}
