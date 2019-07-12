// FILE			: 03_Longest_Substring_Without_Repeating_Characters.js
// AUTHOR		: K.Supasan
// CREATE ON	: 2019, July 11 (UTC+0)

// README

// REFERENCE
//  ref00   : https://leetcode.com/problems/longest-substring-without-repeating-characters/
//  ref01   : https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array
//  ref02   : https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
//  ref03   : https://www.w3schools.com/js/js_string_methods.asp

var lengthOfLongestSubstring = function(s) 
{

    var max_data = 0;
    for( let big_run = 0 ; big_run < s.length ; big_run++ )
    {
        let have_char = Array(128);
        have_char.fill( false );
        have_char[ s.charCodeAt( big_run ) ] = true;
        let count = 1;
        if( s.length - big_run < max_data )
        {
            break;
        }
        for( let small_run = big_run + 1 ; small_run < s.length ; small_run++ )
        {
            let temp_point = s.charCodeAt( small_run );
            if( ! have_char[ temp_point ] )
            {
                count++;
                have_char[ temp_point ] = true;
            }
            else
            {
                break;
            }
        }
        if( count > max_data )
        {
            max_data = count;
        }
    }
    return max_data;
};
console.log( lengthOfLongestSubstring( "bxtnpdbltqtmpyyeqtujuiokcowswqyxntndxqqsgkhvihbaawjuga"
 ) )
