// FILE			: 01_Two_Sum.js
// AUTHOR		: K.Supasan
// CREATE ON	: 2019, July 10 (UTC+0)

// README

// REFERENCE
//  ref00   : https://leetcode.com/problems/two-sum/
//  ref01   : https://www.w3schools.com/js/js_array_sort.asp
//  ref02   : https://flaviocopes.com/node-output-to-cli/
//  ref03   : https://www.w3schools.com/js/js_arrays.asp
//  ref04   : https://www.w3schools.com/jsref/jsref_sort.asp
//  ref05   : https://www.w3schools.com/js/js_booleans.asp
//  ref06   : https://www.w3schools.com/js/js_loop_while.asp
//  ref07   : https://www.w3schools.com/js/js_break.asp
//  ref08   : https://www.w3schools.com/jsref/jsref_push.asp
//  ref09   : https://www.hostingadvice.com/how-to/javascript-add-to-array/

var twoSum = function(nums, target) {
    var backup_nums = nums.slice();
    nums.sort( function(a, b){ return a-b} ); // sort array of numerics
    var run_lower = 0;
    var run_higher = nums.length - 1;
    while( true )
    {
        var temp = nums[ run_lower ] + nums[ run_higher ];
        if( temp == target )
        {
            break;
        }
        else if( temp > target )
        {
            run_higher -= 1;
        }
        else
        {
            run_lower += 1;
        }
    }
    var answer = [];
    for( var run = 0 ; answer.length < 2 ; run++ )
    {
        if( backup_nums[ run ] == nums[ run_lower ] )
        {
            answer.unshift( run );
        }
        else if( backup_nums[ run ] == nums[ run_higher ] )
        {
            answer.push( run );
        }
        else
        {
            ;
        }
    }
    return answer;
};

var input_array = [ 2 , 7 , 15 , 11 , 1 , 9 , 20  , 55 ];
var input_target = 21;

console.log( twoSum( input_array , input_target ) );

