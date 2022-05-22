var images = ["Family Book image.jpg","Suraj.jpg.jpg", "Punam.jpg.jpg" , "Chaitanya.jpj.jpg", "Prachetpg.jpg", ];
var names = ["Family Book","Suraj Dev Kumar Kushwaha", "Punam Devi Kumar Kushwaha", "Chaitanya Dev Kumar Kushwaha", "Prachet Dev Kumar Kushwaha"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
      var updatedImage = images [i];
      document.getElementById("family_member_image").src = updatedImage;
      document.getElementById("Family Book image.jpg").src = updatedImage;
      document.getElementById("Suraj.jpg.jpg").src = updatedImage;
      document.getElementById("Punam.jpg.jpg").src = updatedImage;
      document.getElementById("Chaitanya.jpg.jpg").src= updatedImage;
      document.getElementById("Prachetpg.jpg").src= updatedImage;
      
      var updatedName = images [i] ;
      document.getElementById("family_member_name").innerHTML = updatedName;
      document.getElementById("Family book").innerHTML = updatedName;
      document.getElementById("Suraj Dev Kumar Kushwaha").innerHTML = updatedName;
      document.getElementById("Punam Devi Kumar Kushwaha").innerHTML = updatedName;
      document.getElementById("Chaitanya Dev Kumar Kushwaha").innerHTML = updatedName;
      document.getElementById("Prachet Dev Kumar Kushwaha").innerHTML= updatedName;
  }