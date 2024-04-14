# Doxygen 

## Doxygen Link

-  [Doxygen homepage](https://www.doxygen.nl/).
-  [Doxygen Basics](https://www.youtube.com/watch?v=TtRn3HsOm1s/).

## Doxygen Operation


```
#pragma once

/// This is the brief description for this class
/// 
/// This is the *detailed* description. More **stuff** here
/// ### Example
/// ~~~~~~~~~~~~~~~~~~~~~~.cpp
/// MyClass *a=new MyClass(); // a comment
/// ~~~~~~~~~~~~~~~~~~~~~~
class MyClass1
{
public:
    /// Brif desc.
    ///
    /// This is the detailed one. More details.
    /// @param a This describes parameter a
    /// @param b This describes parameter b
    /// @returns Nothing important.
    /// @see anotherMemberfunction() anotherMemberfunction1()
    /// @see anotherMemberfunction2 anotherMemberfunction3
    /// @note A little side note.
    /// @attention Alittle more important than a note.
    /// @warning A warning is super important!
    void memberFunction( int a, int b);

    void anotherMemberfunction();
    void anotherMemberfunction1( int a);
    void anotherMemberfunction2( int a, int b );
    void anotherMemberfunction3( int a, int b, float c );
};

```