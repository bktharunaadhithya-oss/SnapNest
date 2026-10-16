# --- Concept: Making decisions based on conditions ---

# Ask the user for their score
score = int(input("Enter your exam score (0-100): "))

# Check conditions from top to bottom
if score >= 90:
    print("Grade: A 🌟")
elif score >= 80:
    print("Grade: B 👍")
elif score >= 70:
    print("Grade: C 🙂")
else:
    print("Grade: F 📚 Time to study more!")

# --- Concept: String concatenation, repetition, and length ---

first_name = "Alice"
greeting = "Hello, "

# Combine strings (Concatenation)
full_greeting = greeting + first_name
print(full_greeting)

# Repeat strings using multiplication
excitement = "Bounce! " * 3
print(excitement)  # Outputs: Bounce! Bounce! Bounce! 

# Find the length of a string
text = "Python"
print("Number of characters:", len(text))
