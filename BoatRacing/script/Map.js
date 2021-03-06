/******************************************
 * Projet : Boat Racing
 * Description : Class qui s'occupe de la map
 * Date : 13.04.2015
 * Version : 1.0
 * Auteur : Alex Perritaz
 * *****************************************/

function initialise()
{
   // Get the canvas element
   canvas = document.getElementById("canvas");
   ctx = canvas.getContext("2d");

   // Create a new map
   mapy = new Map();

   mapy.Draw(1280 , 1408);
}

function Map()
{ 
  // Tableau à 2 dimensions
   this.map = [
      [4, 4, 2, 4, 4, 8, 1, 1, 1, 1, 1, 9, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 2, 2, 4, 4, 4, 4],
      [2, 4, 4, 4, 2, 8, 1, 1, 1, 1, 1, 9, 4, 4, 2, 4, 4, 2, 2, 4, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 4, 4, 4, 2, 4, 4],
      [2, 4, 2, 4, 2, 8, 1, 1, 1, 1, 1, 9, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 4, 4, 4, 2, 2, 4, 4, 2, 2, 2, 4, 2, 2, 4, 2, 4, 4, 2, 2, 4, 4, 4],
      [4, 2, 4, 2, 2, 22, 3, 3, 3, 3, 3, 21, 2, 4, 4, 4, 2, 4, 2, 2, 4, 4, 2, 2, 4, 4, 2, 2, 4, 4, 2, 2, 4, 4, 2, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 2, 8, 1, 1, 1, 1, 1, 5, 17, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 4],
      [2, 4, 4, 2, 2, 8, 1, 1, 1, 1, 1, 1, 9, 4, 4, 4, 4, 4, 2, 4, 2, 2, 4, 2, 2, 2, 2, 4, 4, 4, 2, 2, 4, 4, 4, 4, 2, 4, 2, 2, 14, 5, 5, 5, 17, 2, 2, 2, 2, 4],
      [2, 4, 2, 2, 2, 8, 1, 1, 1, 1, 1, 1, 9, 2, 4, 2, 14, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 17, 4, 4, 14, 5, 5, 5, 5, 11, 12, 7, 13, 10, 5, 5, 5, 11, 2],
      [4, 4, 2, 4, 5, 11, 1, 1, 1, 1, 1, 1, 10, 5, 5, 5, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 4, 8, 1, 1, 1, 1, 1, 9, 4, 8, 1, 1, 1, 1, 1, 4],
      [4, 4, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 4, 8, 1, 1, 1, 1, 1, 10, 5, 11, 1, 1, 1, 1, 1, 2],
      [2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 1, 1, 1, 9, 2, 4, 8, 1, 1, 12, 7, 13, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 24, 5, 5, 5, 19, 5, 5, 5, 25, 8, 1, 1, 1, 9, 4, 4, 8, 1, 1, 9, 4, 8, 1, 1, 1, 1, 1, 12, 7, 13, 2],
      [2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 8, 1, 1, 1, 18, 1, 1, 1, 9, 8, 1, 1, 1, 9, 2, 4, 8, 1, 1, 10, 5, 11, 1, 1, 1, 1, 1, 9, 4, 8, 2],
      [4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 8, 1, 12, 7, 18, 7, 13, 1, 9, 8, 1, 1, 1, 9, 4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 4],
      [4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 7, 7, 1, 1, 1, 1, 1, 1, 9, 8, 1, 9, 4, 2, 4, 8, 1, 9, 8, 1, 1, 1, 9, 2, 4, 8, 1, 1, 1, 12, 7, 13, 1, 1, 1, 1, 1, 1, 1, 4],
      [2, 4, 8, 1, 1, 1, 1, 1, 1, 7, 4, 4, 7, 1, 1, 1, 1, 1, 9, 22, 3, 21, 2, 4, 2, 22, 3, 21, 8, 1, 1, 1, 10, 5, 5, 11, 1, 1, 1, 9, 4, 8, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 4, 8, 1, 1, 1, 1, 1, 7, 4, 2, 4, 4, 7, 13, 1, 1, 1, 9, 8, 1, 9, 4, 2, 4, 8, 1, 9, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 1, 1, 1, 1, 1, 1, 1, 4],
      [4, 4, 8, 1, 1, 1, 1, 9, 4, 4, 4, 4, 4, 4, 8, 1, 1, 1, 9, 8, 1, 10, 5, 19, 5, 11, 1, 9, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
      [2, 4, 8, 1, 1, 1, 1, 9, 4, 2, 2, 4, 4, 4, 8, 1, 1, 1, 9, 8, 1, 1, 1, 18, 1, 1, 1, 9, 8, 1, 1, 1, 9, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 13, 1, 1, 1, 4],
      [4, 4, 8, 1, 1, 1, 1, 9, 4, 2, 2, 2, 2, 4, 8, 1, 1, 1, 9, 26, 7, 7, 7, 20, 7, 7, 7, 27, 8, 1, 1, 1, 9, 4, 2, 1, 12, 7, 13, 1, 1, 1, 1, 9, 4, 8, 1, 1, 1, 2],
      [4, 4, 8, 1, 1, 1, 1, 9, 4, 4, 2, 2, 2, 4, 8, 1, 1, 1, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 11, 1, 1, 1, 9, 2, 4, 1, 9, 4, 8, 1, 1, 1, 1, 10, 5, 11, 1, 1, 1, 4],
      [2, 4, 8, 1, 1, 1, 1, 9, 4, 2, 2, 2, 4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 4, 1, 10, 5, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [4, 4, 8, 1, 1, 1, 1, 9, 4, 4, 2, 2, 4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [4, 2, 8, 1, 1, 1, 1, 1, 2, 4, 2, 2, 2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 15, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 13, 1, 4],
      [2, 4, 8, 1, 1, 1, 1, 1, 1, 2, 4, 2, 4, 4, 16, 7, 7, 7, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 8, 1, 2],
      [4, 2, 8, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 2, 2, 4, 4, 4, 16, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 15, 2, 2, 2, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 1, 4],
      [4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 2, 2, 4, 4, 4, 4, 2, 4, 4, 2, 19, 5, 5, 19, 4, 2, 4, 2, 4, 4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
      [2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 5, 5, 5, 5, 5, 5, 4, 2, 18, 1, 1, 18, 2, 4, 2, 4, 5, 5, 5, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4],
      [4, 4, 16, 7, 13, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 1, 1, 1, 1, 1, 1, 2, 4, 18, 1, 1, 18, 4, 2, 4, 5, 1, 1, 1, 1, 1, 12, 7, 13, 1, 1, 1, 1, 12, 7, 13, 1, 9, 2, 4],
      [4, 4, 2, 19, 8, 1, 1, 1, 1, 12, 7, 2, 4, 4, 2, 1, 1, 1, 1, 1, 1, 4, 2, 20, 7, 7, 20, 2, 14, 5, 1, 1, 1, 1, 1, 1, 9, 4, 8, 1, 1, 1, 1, 9, 4, 8, 1, 9, 2, 4],
      [4, 4, 2, 18, 8, 1, 1, 1, 1, 9, 2, 2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 17, 4, 2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 1, 1, 1, 1, 10, 5, 11, 1, 9, 2, 2],
      [4, 2, 4, 18, 8, 1, 1, 1, 1, 9, 2, 4, 2, 8, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 9, 4, 2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 4],
      [4, 2, 4, 18, 8, 1, 1, 1, 1, 9, 4, 4, 4, 8, 1, 1, 1, 9, 4, 1, 1, 1, 1, 1, 9, 2, 2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 7, 15, 2, 2],
      [2, 4, 14, 18, 8, 1, 1, 1, 1, 10, 5, 5, 5, 11, 1, 1, 1, 9, 4, 4, 1, 1, 1, 1, 9, 4, 4, 2, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 2, 4, 4, 4],
      [4, 2, 18, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 2, 4, 1, 1, 1, 9, 4, 2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 4, 2, 2, 2],
      [2, 8, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 4, 4, 1, 1, 1, 9, 4, 4, 2, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 2, 2, 2, 4],
      [4, 8, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 2, 4, 1, 1, 1, 9, 4, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 13, 1, 1, 1, 1, 1, 9, 4, 2, 2, 4, 4],
      [2, 8, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 2, 4, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 8, 1, 1, 1, 1, 1, 1, 9, 2, 4, 2, 4],
      [4, 8, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 1, 1, 1, 12, 7, 13, 9, 2, 2, 2, 4],
      [2, 16, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 13, 1, 1, 1, 1, 1, 1, 1, 9, 4, 8, 9, 2, 4, 4, 4],
      [4, 2, 18, 7, 7, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 8, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 9, 2, 2, 2, 4],
      [4, 2, 3, 3, 3, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 15, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 5, 11, 1, 1, 1, 12, 7, 13, 1, 1, 1, 1, 1, 9, 4, 2, 4],
      [2, 4, 4, 2, 18, 8, 1, 1, 1, 1, 1, 1, 12, 7, 7, 27, 2, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 9, 4, 8, 1, 12, 7, 13, 1, 9, 4, 2, 2],
      [2, 2, 4, 2, 18, 1, 1, 1, 1, 1, 1, 1, 10, 5, 5, 5, 5, 2, 2, 4, 2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 2, 4, 1, 1, 1, 1, 1, 1, 10, 5, 11, 1, 9, 4, 8, 1, 1, 9, 2, 4],
      [4, 4, 4, 8, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 1, 1, 9, 2, 2],
      [4, 2, 4, 8, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 4],
      [2, 4, 4, 2, 20, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 13, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 2],
      [4, 4, 4, 2, 2, 2, 24, 25, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 9, 23, 8, 1, 1, 12, 7, 13, 1, 1, 2, 2, 2, 4],
      [4, 2, 4, 4, 4, 2, 26, 27, 8, 1, 1, 1, 1, 1, 1, 1, 1, 23, 2, 23, 4, 4, 2, 2, 4, 4, 23, 4, 4, 4, 4, 23, 1, 12, 7, 13, 10, 5, 11, 1, 1, 9, 4, 8, 1, 1, 4, 4, 4, 4],
      [4, 4, 4, 2, 2, 2, 2, 2, 16, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 4, 4, 2, 4, 23, 4, 2, 4, 2, 4, 4, 4, 1, 9, 4, 8, 1, 1, 1, 1, 1, 10, 2, 11, 1, 1, 4, 2, 2, 2],
      [4, 2, 4, 2, 4, 4, 4, 4, 2, 4, 4, 4, 2, 2, 4, 4, 4, 2, 4, 4, 4, 23, 4, 4, 2, 4, 4, 2, 4, 4, 4, 4, 2, 4, 2, 2, 4, 2, 2, 4, 2, 4, 2, 2, 4, 2, 4, 4, 4, 4]
   ];

   // Hauteur - Largeur de la carte
   this.w = 1600; // Int
   this.h = 1600; // Int
   // Indique les coordonnées du point supérieur-gauche
   this.px = 0; // Int
   this.py = 0;// Int
   // Tableau indexé - Image à afficher - Progression freinée - Perte d'energie
   this.tiles = [];
   // Objet contenant des données reçues du serveur - Carte - Nom images tuiles / items
   var mapjson;
}


/*
 * Télécharger la carte de jeu
 * @param url = nom du fichier contenant la carte de jeu
 */
Map.prototype.Load = function()
{
   var url = "nom du fichier";
}

/*
 * Indique si le téléchargement de la carte est termnié.
 * @return true quand fini, false si le téléchargement est en
 * cours.
 */
Map.prototype.Loaded = function()
{
   
}

/*
 * Affiche la carte en tenant compte de la position du joueur local
 * @param x, y = position du joueur local dans la grille.
 */
Map.prototype.Draw = function(ctx, imga, x, y)
{
   var img;
   
   var tileSize = 32;
   
   var screenWidth = 20 * tileSize;
   var screenHeight = 12 * tileSize;
   
   var leftBounds = 0;
   var topBounds = 0;
   var rightBounds = 50 * tileSize;
   var bottomBounds = 50 * tileSize;
   
   var top = y - (screenHeight / 2);
   var left = x - (screenWidth / 2);
   var bottom = y + (screenHeight / 2);
   var right = x + (screenWidth / 2);
   
   var subToLeft  = x % tileSize; 
   var subToTop = y % tileSize;
   
   var addColumn = 0;
   var addRow = 0;
   
   // Si le bateau est trop proche de la bordure de la map
   // Empêcher la map de sortir hors zone
   if(left < leftBounds)
   {
      left = leftBounds;
      right = screenWidth;
      subToLeft = 0;
   }
   if(right > rightBounds)
   {
      right = rightBounds;
      left = rightBounds - screenWidth;
      subToLeft = 0;
   }
   if(top < topBounds)
   {
      top = topBounds;
      bottom = screenHeight;
      subToTop = 0;
   }
   if(bottom > bottomBounds)
   {
      bottom = bottomBounds;
      top = bottomBounds - screenHeight;
      subToTop = 0;
   }
   
   if(subToLeft === 0)
   {
      addColumn = 0;
   }
   else
   {
      addColumn = tileSize;
   }
   
   if(subToTop === 0)
   {
      addRow = 0;
   }
   else
   {
      addRow = tileSize;
   }
   
   this.py = 0; 
   this.px = 0; 
   
   for (var height = top; height < bottom + addRow; height += tileSize)
   {
      
      for (var width = left; width < right + addColumn; width += tileSize)
      {
         img = this.GetTile(Math.floor(height/tileSize),Math.floor(width/tileSize),imga);
         ctx.drawImage(img, 0, 0, tileSize, tileSize, this.px * tileSize - subToLeft,  this.py * tileSize - subToTop, tileSize, tileSize);  
         //ctx.drawImage(img, 0, 0, tileSize, tileSize, width - left - subToLeft,  height - top - subToTop, tileSize, tileSize);  
         this.px++;
      }
      this.px = 0;
      this.py++;
   }
}

/*
 * Retourne un objet contenant les information sur la case actuelle.
 * @param x, y = position de la case à lire
 * @return { slow : Number, energy : Number 
 */
Map.prototype.GetTile = function(x, y,imga)
{
   if(x >= 0 && x <= this.map.length && y >= 0 && y <= this.map.length)
   {
      var img = imga[this.map[x][y]];
      return img;
   }
}