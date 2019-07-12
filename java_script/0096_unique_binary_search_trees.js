// FILE			: 0096_Unique_Binary_Search_Tress.js
// AUTHOR		: K.Supasan
// CREATE ON	: 2019, July 11 (UTC+0)

// README

// REFERENCE
//  ref00   : https://leetcode.com/problems/unique-binary-search-trees/

var numTress = function( n )
{
    if( n == 0 )
    {
        return 0;
    }
    else if( n == 1 )
    {
        return 1;
    }
    else if( n == 2 )
    {
        return 2;
    }
    else if( n == 3 )
    {
        return 5;
    }
    else
    {
        ;
    }
    let answer = 0;
    for( run = 1 ; run <= n ; run++ )
    {
        //answer += left and right
        answer += numTrees( run - 1 ) + numTrees( n - run );
    }
    return answer;
};
