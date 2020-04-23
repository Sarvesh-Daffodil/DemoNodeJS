# Section 1 - (5 mins) #

# 1. Abstract Class  and Interface:

Interface basically Service requirement specification. The purpose of the interface is the agreement of the service provider and the consumer. If we know about the implementations fully or partially  we go for Abstract class if we do not know about the implementation we go for interface.
You can not create an instance of an abstract class, You need to extend the abstract class define all the abstract methods and then you can create the instance of that extended class.
Every method inside the interface is by default public abstract, we use interface keyword to create an interface, In Abstract class every method may or may not be abstract means their definition may or may not be defined.
In interface you can not declare private or protected because in interface all the methods are abstract. But in Abstract class you can define private, protected, final, 
In interface every variable is always public static and final you can not define it private or protected, In Abstract class variables can be defined with any modifier.
Transient keyword not applicable for interface because of serialization.

# 2. Getters and Setters in a class:

In the normal java POJO class we define variable private for not to expose and not to assign values directly.
We create some methods to assign and retrieve the values of that variable and that methods also provide surety about not to misuse or assign invaid values, we cal also use, So we use setter and getter functions to assign and get the values of those variable this will make sure the misuse or not to corrupt with values.
You can perform any action in the setter and getter for ex: Suppose there is an salary POJO class which have may variables like HRA, TA, DA, BASiC etc so wa have to calculate everything on the base of basic salary so we define only BASIC setter in that setter function we defined logic for setting other components like HRA is 40% of Basic salary so that we don't need to set HRA separately, So for this kind of purpose we use setters and getters.
