import random, easygui

secret = random.randint(1, 100)
guess = 0;
tries = 0

easygui.msgbox("""AHOY! I'm the Dread Pirate Roberts, and I have a secret! It is a number 1 to 99 I'll give you 6 tries.""")

while guess != secret and tries < 6:
    guess = input("What 's year guess? ")
    if guess < secret:
        print "Too low, ye scurvy dog!"
    elif guess > secret:
        print "Too high, landlubber!"
    tries = tries + 1
    
if guess == secret:
    print "Avast! ye got it! Found my secret, ye did!"
else :
    print "No more guesses! Butter luck next time, matey!"
    print "The secret number was", secret