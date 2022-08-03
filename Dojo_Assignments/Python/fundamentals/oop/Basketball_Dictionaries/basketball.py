class Player:
    def __init__(self, data):
        self.name = data["name"]
        self.age = data["age"]
        self.position = data["position"]
        self.team = data["team"]

    def __repr__(self):
            display = f"Player: {self.name}, {self.age} y/o, pos: {self.position}, team: {self.team}"
            return display

    @classmethod
    def add_players(cls, data):
        player_objects=[]
        for dict in data:
            player_objects.append(cls(dict))
        return player_objects

players = [
    {
    "name": "Kevin Durant", 
    "age":34, 
    "position": "small forward", 
    "team": "Brooklyn Nets"
    },
    {
    "name": "Jason Tatum", 
    "age":24, 
    "position": "small forward", 
    "team": "Boston Celtics"
    },
    {
    "name": "Kyrie Irving", 
    "age":32,
    "position": "Point Guard", 
    "team": "Brooklyn Nets"
    },
    {
    "name": "Damian Lillard", 
    "age":33,
    "position": "Point Guard", 
    "team": "Portland Trailblazers"
    },
    {
    "name": "Joel Embiid", 
    "age":32,
    "position": "Power Foward", 
    "team": "Philidelphia 76ers"
    },
    {
    "name": "DeMar DeRozan",
    "age": 32,
    "position": "Shooting Guard",
    "team": "Chicago Bulls"
    }
]

new_team=[]

for i in players:
    players=Player(i)
    new_team.append(players)
print(new_team)

# kevin = {
#             "name": "Kevin Durant", 
#             "age":34, 
#             "position": "small forward", 
#             "team": "Brooklyn Nets"
#     },

# jason = {
#             "name": "Jason Tatum", 
#             "age":24, 
#             "position": "small forward", 
#             "team": "Boston Celtics"
#     },
# kyrie = {
#             "name": "Kyrie Irving", 
#             "age":32,
#             "position": "Point Guard", 
#             "team": "Brooklyn Nets"
#     },

# player_kevin = Player(kevin)
# player_jason = Player(jason)
# print(Player(kevin))
# player_kyrie = Player(kyrie)
print(Player.add_players(players))