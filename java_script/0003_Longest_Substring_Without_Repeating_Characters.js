// FILE			: 03_Longest_Substring_Without_Repeating_Characters.js
// AUTHOR		: K.Supasan
// CREATE ON	: 2019, July 11 (UTC+0)

// README

// REFERENCE
//  ref00   : https://leetcode.com/problems/longest-substring-without-repeating-characters/
//  ref01   : https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array
//  ref02   : https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
//  ref03   : https://www.w3schools.com/js/js_string_methods.asp

var check_array = function()
{
    return [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
}

var lengthOfLongestSubstring = function(s) 
{
    var array_for_check = check_array();
    var max = 0;
    var count = 0;
    var start_run = 0;
    for( let run = 0 ; run < s.length ; run++ )
    {
        let target_loop = s.charCodeAt( run );
        if( array_for_check[ target_loop ] )
        {
            count += 1;
            array_for_check[ target_loop ] = false;
        }
        else
        {
            if( count > max )
            {
                max = count;
            }
            if( ( s.length - start_run - 1 ) > max )
            {
                let new_count = lengthOfLongestSubstring( s.slice( start_run + 1 , s.length ) );
                if( new_count > max )
                {
                    max = new_count;
                }
            }
            start_run = run;
            count = 1;
            array_for_check = check_array();
            array_for_check[ target_loop ] = false;
        }
    }
    if( count > max )
    {
        max = count;
    }
    return max;
};
console.log( lengthOfLongestSubstring( "bxtnpdbltqtmpyyeqtujuiokcowswqyxntndxqqsgkhvihbaawjuga"
 ) )
