class Player:
    def __init__(self, data):
        self.name = data["name"]
        self.age = data["age"]
        self.position = data["position"]
        self.team = data["team"]

kevin = {
            "name": "Kevin Durant", 
            "age":34, 
            "position": "small forward", 
            "team": "Brooklyn Nets"
    }

jason = {
            "name": "Jason Tatum", 
            "age":24, 
            "position": "small forward", 
            "team": "Boston Celtics"
    }
kyrie = {
            "name": "Kyrie Irving", 
            "age":32,
            "position": "Point Guard", 
            "team": "Brooklyn Nets"
    }

damian= {
            "name": "Damian Lillard", 
            "age":33,
            "position": "Point Guard", 
            "team": "Portland Trailblazers"
    }

joel= {
            "name": "Joel Embiid", 
            "age":32,
            "position": "Power Foward", 
            "team": "Philidelphia 76ers"
    }

demar= {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }

new_team=[]

for i in new_team:
    print(i.Player)

player_kevin = Player(kevin)
player_jason = Player(jason)
player_kyrie = Player(kyrie)
print(Player(kevin))