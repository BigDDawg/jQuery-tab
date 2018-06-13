$(document).ready(function(){
  
  $('.tab-list').each(function(){                   // Array of Tabs
      var $unorderedlistArray = $(this);            // Tab array stored in Variable
      var $activeListItem = $unorderedlistArray.find('li.active');   // Store active list item
      var $activeLink = $activeListItem.find('a');                   // Anchor link from active tab
      var $panel = $($activeLink.attr('href'));    // Anchor link's href attribute

      // when clicking the a links with a class of tab-control
      $unorderedlistArray.on('click', 'a', function(event) { // When click on a tab
        event.preventDefault();
        console.log($panel);
                                 // Prevent link behavior
        var $link = $(this),     // Store the current link
        // Target the panel id with the anchor link
            anchorLink = this.hash;   // Href of clicked tab
            console.log(anchorLink);  // logs id clicked
        if (anchorLink && !$activeLink.is('.active')) {  // IF Link clicked Doesn't have a class of active.
            // Make panel and tab inactive
            $panel.removeClass('active');
            $activeListItem .removeClass('active');      // Make tab inactive

            $panel = $(anchorLink).addClass('active');  // Make new panel active
            $activeListItem  = $link.parent().addClass('active');   // Make new tab active 
        }
      });
  });

});