/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

var Main = {};

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Donnie = {};
Main.Donnie.FirstName = "Donnie";
Main.Donnie.LastName = "Santos";
Main.Donnie.Age = 36;

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Donnie["HairColor"] = "Red";
Main.Donnie["EyeColor"] = "Blue";

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

delete Main.Donnie.HairColor;

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Michael =
{
	FirstName: "Michael",
	LastName: "Santos",
	Age: 28
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Person = function(firstName, lastName, age)
{
	this.FirstName = firstName;
	this.LastName = lastName;
	this.Age = age;

	this.SetFirstName = function(name)
	{
		this.FirstName = name;
	}
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Alana = new Main.Person("Alana", "Santos", 41);
Main.Marsha = new Main.Person("Mom", "Santos", 66);
Main.Don = new Main.Person("Dad", "Santos", 78);

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.OldestInFamily = Main.Don;
Main.YoungestInFamily = Main.Michael;

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Don.SetFirstName("Don");
Main.Marsha.SetFirstName("Marsha");

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Person.prototype.GetFullName = function()
{
	return this.FirstName + " " + this.LastName;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

document.body.innerHTML = Main.Don.GetFullName();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Marsha.GetFullName();

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////