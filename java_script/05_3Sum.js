// FILE			: 05_3Sum.js
// AUTHOR		: K.Supasan
// CREATE ON	: 2019, July 11 (UTC+0)

// README

// REFERENCE
//  ref00   : https://leetcode.com/problems/3sum/
//  ref01   : https://www.w3schools.com/jsref/jsref_push.asp

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort( function(a, b){ return a-b} ); // sort array of numerics
    var answer = [];
//    console.log( nums );
    for( let run = 0 ; run < nums.length - 2 ; run++ )
    {
        if( run != 0 )
        {
            if( nums[ run ] == nums[ run - 1 ] )
            {
                continue;
            }
        }
//        console.log( "==> " , nums[ run ] );
        for( let semi_run = run + 1 ; semi_run < nums.length -1 ; semi_run++ )
        {
            if( semi_run != run + 1 )
            {
                if( nums[ semi_run ] == nums[ semi_run - 1 ] )
                {
                    continue;
                }  
            }
            const target_num = -1.0*( nums[ run ] + nums[ semi_run ] ) ;
//            console.log( "  |==> " , nums[ semi_run ] , " and target is " , target_num );
            for( let last_run = semi_run + 1 ; last_run < nums.length ; last_run ++ )
            {
//                console.log( "     |==> " , nums[ last_run ] );
                if( last_run != semi_run + 1 )
                {
                    if( nums[ last_run ] == nums[ last_run - 1] )
                    {
                        continue;
                    }
                }
                if( nums[ last_run ] == target_num )
                {
//                    console.log( "         |=> PUSH")
                    answer.push( [ nums[run] , nums[semi_run] , nums[last_run] ] );
                }
                else if( target_num < nums[ last_run] )
                {
                    break;
                }
                else
                {
                    ;
                }
            }
        }
    } 
    return answer;
};

console.log( threeSum( [-1, 0, 1, 2, -1, -4] ) );
