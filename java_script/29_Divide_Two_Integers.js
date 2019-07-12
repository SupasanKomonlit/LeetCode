// FILE			: 29_Divide_Two_Integers.js
// AUTHOR		: K.Supasan
// CREATE ON	: 2019, July 11 (UTC+0)

// README

// REFERENCE
//  ref00   : https://leetcode.com/problems/divide-two-integers/
//  ref01   : https://www.cs.utah.edu/~rajeev/cs3810/slides/3810-08.pdf
//  ref02   : https://www.w3schools.com/js/js_bitwise.asp

var divide = function(dividend, divisor) {
    let sign_bit = (dividend >> 31) ^ (divisor >> 31 );
    let abs_dividend = Math.abs( dividend );
    let abs_divisor = Math.abs( divisor );
    let answer = 0;
    let start_shift = check_bit( abs_dividend ) - check_bit( abs_divisor );
    console.log( sign_bit , dividend , divisor );
    console.log( sign_bit , dividend.toString(2) , divisor.toString(2) );
    console.log( sign_bit , abs_dividend.toString(2) , abs_divisor.toString(2) );
    while( ( abs_divisor <= abs_dividend ) && start_shift >= 0 )
    {
        console.log( "=============================================")
        if( start_shift != 0 )
        {
            super_divisor = abs_divisor << start_shift;
        }
        else
        {
            super_divisor = abs_divisor;
        }
        console.log( abs_dividend.toString(2) );
        console.log( super_divisor.toString(2) );
        if( super_divisor < 0 )
        {
            if( abs_divisor == 1 || abs_divisor == 2 )
            {
                super_divisor = 2147483648;
            }
            else
            {
                super_divisor = ( 2147483648 
                    + ( 2147483647 & ( ( abs_divisor 
                        >> ( check_bit( abs_divisor ) - 1 ) ) << start_shift ) ) );
            }
            console.log( super_divisor.toString(2) , "convert");
        }
        if( super_divisor <= abs_dividend )
        {
            console.log( "DELETE")
            abs_dividend -= super_divisor;
            answer |= 1 << start_shift;
            answer = Math.abs( answer );
        }
        console.log( abs_dividend.toString(2) );
        console.log( start_shift , "   " , answer.toString(2) )
        start_shift -= 1;
    }
    if( sign_bit )
    {
        if( answer == 2147483648)
        {
            answer = -2147483648;
        }
        else
        {
            answer = (~answer) + 1;
        }
    }
    else
    {
        if( answer > 2147483647 )
        {
            answer = 2147483647;
        }
    } 
    return answer; 
};

var check_bit = function( number )
{
    let answer = 0;
    let check_answer = true;
    if( number == 2147483648 )
    {
        answer = 32;
        check_answer = false;
    }
    while( check_answer )
    {
        if( number >> answer != 0 )
        {
            answer++;
        }
        else
        {
            break;
        }
    }
    return answer;
}


//console.log( check_bit( 156 ) );
console.log( divide( -2147483648 , 3 ) )
console.log( divide( -2147483648 , 2 ) )
console.log( divide( -2147483648 , 1 ) )
//console.log( divide( -1600 , 3 ) )
console.log( divide( -8 , 2 ) )
console.log( divide( -2147483648 , -2147483648 ) )


