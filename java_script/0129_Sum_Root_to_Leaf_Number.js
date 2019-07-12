// FILE			: 0129_Sum_Root_to_Leaf_Numbers.js
// AUTHOR		: K.Supasan
// CREATE ON	: 2019, July 10 (UTC+0)

// README

// REFERENCE
//

var sumNumbers = function( root )
{
    return runNumbers( root )[0];
}

var runNumbers = function( root ) // return value and degree
{
    // in run number will have 3 case have left , have right and don't have leaft
    const temp;
    const answer;
    if( ( root.right != null ) && ( root.left != null ) )
    {
        temp = runNumber( root.right );
        answer = [ root.val * Math.pow( 10 , temp[1] ) + temp[0] , temp[1] ];
        temp = runNumber( root.left  );
        answer[0] += (root.val * Math.pow( 10 , temp[1] ) ) + temp[0];
        if( temp[1] > answer[1] )
        {
            answer[1] = temp[1];
        }
        answer += 1;
    }
    else if( root.right != null )
    {
        temp = runNumber( root.right );
        answer = [ root.val * Math.pow( 10 , temp[1] ) + temp[0] , temp[1]+1 ];
    }
    else if( root.left != null )
    {
        temp = runNumber( root.left );
        answer = [ root.val * Math.pow( 10 , temp[1] ) + temp[0] , temp[1]+1 ];
    }
    else
    {
        answer = [ root.val , 1 ];
    }
    return answer;
}
