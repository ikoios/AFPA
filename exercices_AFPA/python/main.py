########## [Listes] ##########

# fruits = ["pomme", "banane", "orange"]
# print(fruits)
# fruits.append("kiwi")
# print(fruits)
# fruits.remove("orange")
# print(fruits)
# fruits[1] = "ananas"
# print(fruits)
# print("cette liste contient", len(fruits), "éléments")
# fruits.sort()
# print(fruits)


########## [Dictionnaires] ##########

# fruits = {
#     "pomme": "rouge",
#     "banane": "jaune",
#     "orange": "orange"
# }
# fruits["kiwi"] = "vert"
# banane_value = fruits.get("banane")
# fruits["pomme"] = "vert"
# fruits.pop("banane")
# print(fruits)


########### [Conditions] ##########

# nombre_a_gauche = input("Entrez un nombre entier: ")
# nombre_a_droite = input("Entrez un nombre entier: ")
# symbole = input("Entrez le symbole correspondant à l'opération souhaitéé [+, -, *, /]: ")
# resultat = 0
# if not isinstance(nombre_a_droite, int) or  not isinstance(nombre_a_gauche, int):
#     print("Je ne travaille qu'avec des nombres entiers")
# elif nombre_a_droite == 0 or nombre_a_gauche == 0:
#     print("Erreur: impossible de diviser par zéro")
# else:    
#     match symbole:
#         case "+":
#             resultat = nombre_a_droite + nombre_a_gauche
#             print("Le résultat de l'opération est : {resultat}")
#         case "-":
#             resultat = nombre_a_droite - nombre_a_gauche
#             print("Le résultat de l'opération est : {resultat}")
#         case "*":
#             resultat = nombre_a_droite * nombre_a_gauche
#             print("Le résultat de l'opération est : {resultat}")
#         case "/":
#             resultat = nombre_a_droite / nombre_a_gauche
#             print("Le résultat de l'opération est : {resultat}")
#         case _:
#             print("ce symbole n'est correct")


########## [Boucles] ##########

# list = [input("Saisir un nombre"), input("Saisir un nombre"), input("Saisir un nombre"), input("Saisir un nombre"),]
# print(list)
# somme = 0

# for i in list:
#     somme += int(i)

# print("La somme de cette liste est: ", somme)

# moyenne = somme / len(list)

# print("La moyenne de cette liste est: ", moyenne)

# nombre_sup_moyenne = 0

# for i in list:
#     if int(i) > moyenne:
#         nombre_sup_moyenne += 1
        
# print("Les nombres qui sont supérieus à la moyenne sont: ", nombre_sup_moyenne)
        
# nombre_pairs = 0
# i = 0

# while i < len(list):
#     if int(list[i]) % 2 == 0:
#         nombre_pairs += 1
#     i += 1

# print("Il y a: ", nombre_pairs, "de nombres paire") 


########## [Fonctions] ##########

# def salaire_mensuel(salaire_annuel):
#     return salaire_annuel / 12

# def salaire_hebdomadaire(salaire_mensuel):
#     return salaire_mensuel / 4

# def salaire_horaire(salaire_hebdomadaire, heures_travaillees):
#     return salaire_hebdomadaire / heures_travaillees

# salaire_annee = float(input("Saisir votre salaire annuel: "))
# heures = float(input("Saisir les heures travaillées: "))

# mensuel = salaire_mensuel(salaire_annee)
# hebdomadaire = salaire_hebdomadaire(mensuel)
# horaire = salaire_horaire(hebdomadaire, heures)

# print("Votre salaire horaire est de", horaire, "euros")

########## [Import] ##########

import module.operations

print(module.operations.addition(3, 5))