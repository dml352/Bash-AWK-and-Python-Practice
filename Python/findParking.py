#!/usr/bin/env python
# Duc Le
# CS265
# The script will read an input file with parking lot information
# and return the nearest 20 lots to a given location.

#Arrays that will hold each line's information
#GIS_FPC_PP,PERIMETER,MAT,LIGHTS,PARK,SPACES,LAT,LNG
gis=[]
perimeter=[]
mat=[]
lights=[]
park=[]
spaces=[]
lat=[]
lng=[]

#Now, parsing information into the corresponding lists
import csv
import philly_loc
import sys

fileName = "testInput.csv"
if len(sys.argv) > 3:  #Enter only the option -n and one file.
	sys.exit("ERROR: Enter only the option -n and one file.")

if len(sys.argv) == 3:  #3 arguments, the 3rd is the file name
	fileName = sys.argv[2]

f = file(fileName, 'rb')
reader = csv.reader(f, delimiter=",", quotechar='"')
header = reader.next()
#print "Collum title: ", header
for rec in reader:
	gis.append(rec[0])
	perimeter.append(rec[1])
	mat.append(rec[2])
	lights.append(rec[3])
	park.append(rec[4])
	spaces.append(rec[5])
	lat.append(rec[6])
	lng.append(rec[7])

#Compute the distance corresponding to each location
test = [];
test = philly_loc.getLoc()
#print test[0], test[1]

import math

distance=[None] * len(lat)
for i in range(len(lat)):	#calculate the distance
	distance[i] = math.sqrt((float(lat[i]) - test[0]) * (float(lat[i]) -
test[0]) + (float(lng[0]) - test[1]) * (float(lng[0]) - test[1]))
#	print distance[i],"\n"

#Now we sort the distance,
distance=enumerate(distance)  #mark each distance with its index

#sort by distance, and print out the nearest 20
def getKey(item):
	return item[1]
distance=sorted(distance, key=getKey)

max = 20   #default number of records
if len(sys.argv) >= 2:
	numRecord = sys.argv[1] 
	if numRecord[:2] == "-n":
		max = int(numRecord[2:])

printOut = [] 	# list of places to print out 
count = 0
for item  in distance:
	if count < max:
		printOut.append(item)
		#print item[1]#lat[index]," ", lng[index]," ", mat[index]," ", spaces[index]  	
		count += 1
	else:
		 break

printOut.reverse()
for item in printOut:
	index = item[0]
	print lat[index] + " " + lng[index] + " " + mat[index] + " " + spaces[index]     

