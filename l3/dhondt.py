import json

PARTIES = ["PO", "PSL", "PiS", "RPL", "SLD", "MN"]

with open('results2011.json') as f:
  data = json.load(f)


print("nr okregu | nazwa ", end="")
for i, party in enumerate(PARTIES):
  print(" | ", party, end="")
print("\n")

final_results = {}
for district in data:
  l = []
  mandates = int(district["Mandaty"])

  divisor = 1
  while len(l) < 2*mandates:
    for party in PARTIES:
      l += [(party, district[party] / divisor)]
    divisor += 1

  results = sorted(l, key=lambda el: el[1], reverse=True)[:mandates]
  names = [r[0] for r in results]
  district_results = {name: names.count(name) for name in names}

  print(district["Okreg"], " | ", district["Nazwa"], end="")
  for party in PARTIES:
    if party in district_results:
      print(" | ", district_results[party], end="")
    else:
      print(" | ", 0, end="")

  print("\n")




