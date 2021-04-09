function palindrome(str) {
    var str2 = str.split('').reverse().join('')
    return str.replace(/[^a-z0-9]/ig, "").toLowerCase()===str2.replace(/[^a-z0-9]/ig, "").toLowerCase()
   }
   
   
   
  console.log(palindrome("eye"))