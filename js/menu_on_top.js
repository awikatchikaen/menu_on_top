/**
* @package menu_on_top
* @category base
* @author Awikatchikaen
* @copyright 2012-2013 Awikatchikaen <lord.awikatchikaen@gmail.com>
* @license GNU Affero General Public license (AGPL)
* @link information http://apps.owncloud.com/content/show.php?content=157091
*
* This library is free software; you can redistribute it and/or
* modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
* License as published by the Free Software Foundation; either
* version 3 of the license, or any later version.
*
* This library is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU AFFERO GENERAL PUBLIC LICENSE for more details.
*
* You should have received a copy of the GNU Affero General Public
* License along with this library.
* If not, see <http://www.gnu.org/licenses/>.
*
*/

/**
 * @file js/menu_on_top.JS
 * @author Awikatchikaen
 */



$(document).ready(function () {
    $("#navigation").hide();
    $("#navigation").css("visibility", "visible");
    $("#owncloud").click(function(e){
        e.preventDefault();
        $("#navigation").slideToggle(); 
    });
      
      
    $("#navigation li a").click(function(e){
        $("#navigation").slideUp(); 
    });
    
    $("#navigation").mouseleave(function(){
        $("#navigation").slideUp();
    });

});

/*
$(function () {
    //$(".campaign-box span:last").hide();
    $("#owncloud").hover(function () { 
        //$("#navigation").css("opacity", 0.5);
        $("#navigation").fadeIn("fast");           
    }, function () {        
        //$("#navigation").css("opacity", 1); 
        $("#navigation").hide("slow");
    });
});
*/