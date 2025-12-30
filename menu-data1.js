// menu-data.js — Maison Kayser (FR/EN)
// Version FR corrigée : orthographe, style, cohérence

const menuData = {
  fr: [
    {
      id: "petits-dejeuners",
      title: "Nos Petits-Déjeuners & Brunch",
      categories: [
        {
          id: "formules",
          title: "Nos Formules",
          subtitle:
            "Disponibles du lundi au vendredi jusqu’à 12h00, le week-end et les jours fériés jusqu’à 16h00",
          items: [
            {
              name: "Formule Bénédicte",
              description:
                "Boisson chaude et boisson froide au choix. Bun brioché garni d’œufs pochés, servi avec une sauce hollandaise maison. Au choix : saumon, pastrami, charcuterie ou légumes grillés. Pain perdu ou pancake au caramel dulce de leche, accompagné de granola maison et de chantilly.",
              price: "125 Dh"
            },
            {
              name: "Formule Egg Bun",
              description:
                "Boisson chaude et boisson froide au choix. Bun brioché aux œufs brouillés et fromage frais. Au choix : saumon, pastrami, charcuterie ou légumes grillés. Pain perdu ou pancake au caramel dulce de leche, accompagné de granola maison et de chantilly.",
              price: "115 Dh"
            },
            {
              name: "Formule Le Continental",
              description:
                "Boisson chaude et boisson froide au choix. Omelette au choix : légumes grillés, charcuterie, fromage, champignons ou épinards. Corbeille du boulanger et ses condiments. Salade de fruits de saison parfumée à la verveine.",
              price: "95 Dh"
            },
            {
              name: "Formule Traditionnelle",
              description:
                "Boisson chaude et boisson froide au choix. Œufs au khlii (bœuf séché) ou chakchouka aux œufs et à la feta. Corbeille traditionnelle (msemen, harcha, batbout) et pain complet individuel. Condiments : jben, miel, huile d’olive et olives marinées. Salade de fruits de saison à la verveine.",
              price: "105 Dh"
            },
            {
              name: "Formule du Boulanger",
              description:
                "Boisson chaude et boisson froide au choix. Corbeille du boulanger (pain céréales individuel, pain complet individuel, mini-croissant, mini pain au chocolat, mini pain aux raisins) et ses condiments (beurre, confiture et miel). Disponible du lundi au vendredi jusqu’à 11h00.",
              price: "55 Dh"
            },
            {
              name: "Formule Brunch",
              description:
                "Boisson chaude et boisson froide au choix. Corbeille du boulanger et ses condiments. Tartine guacamole, saumon et œuf poché ou tartine pastrami grillé au cream cheese. Salade de fruits, Sunshine Bowl ou chia pudding. Pain perdu ou pancake au caramel dulce de leche.",
              price: "150 Dh"
            }
          ]
        },
        {
          id: "oeufs",
          title: "Nos Œufs Frais à la Carte",
          subtitle: "Jusqu’à 12h00",
          items: [
            { name: "2 œufs à la coque", price: "35 Dh" },
            { name: "3 œufs au plat", price: "35 Dh" },
            { name: "Omelette nature", price: "40 Dh" },
            { name: "Omelette aux fines herbes fraîches", price: "40 Dh" },
            { name: "Omelette au fromage", price: "45 Dh" },
            { name: "Omelette au jambon de dinde", price: "45 Dh" },
            { name: "Œufs brouillés à la crème", price: "45 Dh" },
            { name: "3 œufs au khlii", price: "50 Dh" },
            { name: "Omelette aux champignons", price: "50 Dh" },
            { name: "Omelette soufflée blanche aux épinards", price: "55 Dh" },
            { name: "Omelette au saumon", price: "65 Dh" }
          ]
        }
      ]
    },

    {
      id: "desserts",
      title: "Nos Desserts",
      categories: [
        {
          id: "desserts-list",
          title: "Douceurs Sucrées",
          items: [
            {
              name: "Chia Pudding",
              description:
                "Au lait de coco, coulis de fruits rouges, fruits frais et granola maison.",
              price: "55 Dh"
            },
            {
              name: "Sunshine Bowl",
              description:
                "Bol de fromage blanc, miel, fruits frais et granola maison.",
              price: "60 Dh"
            },
            {
              name: "Salade de fruits de saison à la verveine",
              price: "45 Dh"
            },
            {
              name: "Pain Perdu",
              description:
                "Brioche toastée, coulis de fruits rouges, sauce chocolat ou caramel, caramel dulce de leche et boule de glace vanille.",
              price: "65 Dh"
            },
            {
              name: "Pancake",
              description:
                "Pancake accompagné de coulis de fruits, sauce chocolat ou caramel, chantilly, caramel dulce de leche et boule de glace vanille.",
              price: "65 Dh"
            },
            {
              name: "Sebastian et ses sauces au choix",
              description:
                "Caramel dulce de leche, sauce chocolat ou sauce pistache.",
              price: "55 Dh"
            }
          ]
        }
      ]
    }
  ]
};

export default menuData;
