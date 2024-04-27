const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			getPeople: async() => {
				try {
					const result = await fetch ("https://swapi.py4e.com/api/people/")
					if (!result.ok) {
						throw new Error(error)
					}
					const data = await result.json()
					console.log("people received:", data)
					const store = useStore()
					setStore({...store, people: [store.people, data]})
				} catch(error){
					console.log("erorr while receiving people:", error)
				}
			},

			getPlanets: async() => {
				try {
					const result = await fetch ("https://swapi.py4e.com/api/planets/")
					if (!result.ok) {
						throw new Error(error)
					}
					const data = await result.json()
					console.log("planets received:", data)
					const store = useStore()
					setStore({...store, people: [store.people, data]})
				} catch(error){
					console.log("erorr while receiving planets:", error)
				}
			},

			getVehicles: async() => {
				try {
					const result = await fetch ("https://swapi.py4e.com/api/vehicles/")
					if (!result.ok) {
						throw new Error(error)
					}
					const data = await result.json()
					console.log("vehicles received:", data)
					const store = useStore()
					setStore({...store, people: [store.people, data]})
				} catch(error){
					console.log("erorr while receiving vehicles:", error)
				}
			},
		}
	};
};

export default getState;
