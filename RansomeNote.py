#create a class named RansomeNoteSolution
class RansomeNoteSol:
    #make a function that takes two strings and assign this function
    #to return a bool value 
    def Const(self, ransomNote: str, magazine: str) -> bool:
##assign a variable note to be equal to a count function 
##with a argument ransomeNote The Counter holds the data 
##in an unordered collection, just like hashtable objects
        note = Counter(ransomNote)
##assign a variable mag to be equal to a count fun 
#with a argument magazine
        mag = Counter(magazine)
#If the string mag is equal to note return true
#else return false.
        if mag == note: return True
        return False
        
##I have seen this problem before while coding on leetcode
##I was not able to complete it without their help as I was not
##very familiar with hashmap. I used some of their code.
##but I made sure I understood the definition of it