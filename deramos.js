'use strict';

/** Gets the number of characters that differ in ith position from position 1 to length of string 1  **/
function getHammingDistance(str1, str2){ 
	var cnt=0, i=0;
	
	if(str1.length != str2.length) console.log("Error! Strings are not equal!"); //prints error msg if length of both string is NOT equal
	if(str1.length <= 0 || str2.length <= 0) console.log("Invalid string length!"); //prints error msg if length is invalid (negative or zero)
	else{
		while(i<str1.length){
			if(str1[i]!=str2[i]) //if characters in ith position is NOT equal
				cnt++;	//updates counter				
			i++; //updates i
		}
		return(cnt);
	}	
}

/** Returns number of occurrence of pattern in original **/
function countSubstrPattern(original, pattern){
	var str = original.split(pattern);
	var cnt = 0;
	for(var i=0;i<str.length;i++) if(str[i] != "") cnt++;
	return(cnt);
}

/** Checks if the string str is a valid string based on the letters of alphabet **/
function isValidString(str, alphabet){ 
	for(var i=0;i<str.length;i++){ 
		if(alphabet.indexOf(str[i]) == -1){	
			return(false); //if invalid
		}
	}
	return(true); //if valid
}

/** Returns the number of Gs minus the number of Cs **/
function getSkew(str, n){ 
	var G = 0;	//initializes G and C to 0
	var C = 0;
	
	if(str.length==0) return(0); //returns 0 if no string
	for(var i=0;i<n;i++){
		if(str[i] == 'G') G++; //increments G if G is found in string
		else if(str[i] == 'C') C++; //increments C if C is found in string
	}
	
	var skewed = G - C;
	return(skewed); //returns number of Gs minus number of Cs 
}

/** Returns the maximum value of the number of Gs minus the number of Cs **/
function getMaxSkewN(str, n){
	var sValue=[];
	for(var i=0;i<n;i++){
		sValue.push(getSkew(str,i+1)); 
	}

	/* gets Maximum of the array of skew values*/	
	var m = sValue[0]
	for(var i=0; i<sValue.length; i++){
		if(m<sValue[i]) 
			m=sValue[i]; //updates maximum
	}
	return m;
	
}

/** Returns the minimum value of the number of Gs minus the number of Cs **/
function getMinSkewN(str, n){
	var sValue=[];
	for(var i=0;i<n;i++){
		sValue.push(getSkew(str,i+1));
	}
	
	/* gets Minimum of the array of skew values */
	var m = sValue[0];
	for(var i=0; i<sValue.length; i++){
		if(m>sValue[i]) 
			m=sValue[i]; //updates minimum
	}
	return m;
}

