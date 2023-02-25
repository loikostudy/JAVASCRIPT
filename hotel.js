


// OBJECT LITERAL WITH PROPERTIES  AND METHODS 

var hotel = 
{
    name: 'Quay',
    rooms: 40,
    booked:25,
    checkAvailability: function() 
    {
        return this.rooms - this.booked;
    }


};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

//PARK HOTEL 
var hotel2 = {
    name:'Park',
    rooms: 120,
    booked:77,
    checkAvailability: function()
    {
        return this.rooms - this.booked;
    }

};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRoomS = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

//OBJECT CONSTRUCTOR SYNTAX 

var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function ()
{
    return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

// OBJECT CONSTRUCTOR NOTATION 
function Hotel(name,rooms,booked)
{
this.name = name;
this.rooms = rooms;
this.booked = booked;
this.checkAvailability = function ()
{
    return this.rooms - this.booked.;
};
var quayHotel = new Hotel('Quay',40,25);
var parkHotel = new Hotel('Park',120,77);

var details1 = quayHotel.name + 'rooms: ';
details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + 'rooms: ';
details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel');
elHotel2.textContent = details2; 

}