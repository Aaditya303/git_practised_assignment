let str="aba";
bag="";

for (i=str.length-1;i<=0;i--){

bag=bag+str[i];

}
if(str===bag){
console.log("palindrome");
}else{
console.log("Not Palindrome");
}