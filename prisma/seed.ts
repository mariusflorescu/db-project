import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const genres = [
    {
        name: "Action"
    },
    {
        name: "Adventure"
    },
    {
        name: "Comedy"
    },
    {
        name: "Crime and mystery"
    },
    {
        name: "Fantasy"
    },
    {
        name: "Historical"
    },
    {
        name: "Horror"
    },
    {
        name: "Romance"
    },
    {
        name: "Satire"
    },
    {
        name: "Science Fiction"
    },
    {
        name: "Speculative"
    },
    {
        name: "Thriller"
    },
    {
        name: "Western"
    },
]

const directors = [
    {
        firstname: "James",
        lastname: "Cameron",
        birth_date: new Date("1945-8-16")
    },
    {
        firstname: "Martin",
        lastname: "Scorsese",
        birth_date: new Date("1942-11-17")
    },
    {
        firstname: "James",
        lastname: "Gunn",
        birth_date: new Date("1996-8-5")
    },
    {
        firstname: "Dough",
        lastname: "Liman",
        birth_date: new Date("1965-7-24")
    },
    {
        firstname: "Glenn",
        lastname: "Ficarra",
        birth_date: new Date("1969-5-27")
    },
    {
        firstname: "David",
        lastname: "Fincher",
        birth_date: new Date("1962-8-28")
    },
    {
        firstname: "Espan",
        lastname: "Sandberg",
        birth_date: new Date("1971-6-17")
    },
    {
        firstname: "Joe",
        lastname: "Russo",
        birth_date: new Date("1971-7-18")
    },
    {
        firstname: "James",
        lastname: "Wan",
        birth_date: new Date("1977-1-26")
    },
    {
        firstname: "Seth",
        lastname: "Gordon",
        birth_date: new Date("1976-7-15")
    },
    {
        firstname: "Robert",
        lastname: "Zemeckis",
        birth_date: new Date("1951-12-24")
    }
]

const actors = [
    {
        firstname: "Leonardo",
        lastname: "Dicaprio",
        birth_date: new Date("1974-11-11")
    },
    {
        firstname: "Margot",
        lastname: "Robbie",
        birth_date: new Date("1990-7-2")
    },
    {
        firstname: "Will",
        lastname: "Smith",
        birth_date: new Date("1968-9-25")
    },
    {
        firstname: "Tom",
        lastname: "Hanks",
        birth_date: new Date("1956-7-9")
    },
    {
        firstname: "Johnny",
        lastname: "Depp",
        birth_date: new Date("1963-12-18")
    },
    {
        firstname: "Brad",
        lastname: "Pitt",
        birth_date: new Date("1963-12-18")
    },
    {
        firstname: "Jared",
        lastname: "Leto",
        birth_date: new Date("1971-12-26")
    },
    {
        firstname: "Angelina",
        lastname: "Jolie",
        birth_date: new Date("1975-6-4")
    },
    {
        firstname: "Chris",
        lastname: "Pratt",
        birth_date: new Date("1979-7-21")
    },
    {
        firstname: "Dave",
        lastname: "Bautista",
        birth_date: new Date("1969-1-18")
    },
    {
        firstname: "Orlando",
        lastname: "Bloom",
        birth_date: new Date("1977-01-13")
    },
    {
        firstname: "Robert",
        lastname: "Downey",
        birth_date: new Date("1965-4-4")
    },
    {
        firstname: "Mark",
        lastname: "Ruffalo",
        birth_date: new Date("1967-11-22")
    },
    {
        firstname: "Ryan",
        lastname: "Kwanten",
        birth_date: new Date("1976-10-28")
    },
    {
        firstname: "Vin",
        lastname: "Diesel",
        birth_date: new Date("1967-7-18")
    },
    {
        firstname: "Paul",
        lastname: "Walker",
        birth_date: new Date("1973-9-12")
    },
    {
        firstname: "Dwayne",
        lastname: "Johnson",
        birth_date: new Date("1972-5-2")
    },
    {
        firstname: "Zac",
        lastname: "Efron",
        birth_date: new Date("1987-7-18")
    },
]

const movies = [
    {
        title: "Titanic",
        description: "Titanic is a 1997 American epic romance and disaster film directed, written, produced, and co-edited by James Cameron. Incorporating both historical and fictionalized aspects, it is based on accounts of the sinking of the RMS Titanic, and stars Leonardo DiCaprio and Kate Winslet as members of different social classes who fall in love aboard the ship during its ill-fated maiden voyage.",
        release_date: new Date("1997-01-01"),
        director_id: 1
    },
    {
        title: "The Wolf of Wall Street",
        description: `The Wolf of Wall Street is a 2013 American film directed by Martin Scorsese and written by Terence Winter, based on the 2007 memoir by Jordan Belfort. It recounts Belfort's perspective on his career as a stockbroker in New York City and how his firm, Stratton Oakmont, engaged in rampant corruption and fraud on Wall Street, which ultimately led to his downfall. Leonardo DiCaprio, who was also a producer on the film, stars as Belfort, with Jonah Hill as his business partner and friend, Donnie Azoff, Margot Robbie as his wife, Naomi Lapaglia, and Kyle Chandler as FBI agent Patrick Denham, who tries to bring Belfort down.`,
        release_date: new Date("2013-01-01"),
        director_id: 2
    },
    {
        title: "Suicide Squad",
        description: "Suicide Squad is a 2016 American superhero film based on the DC Comics supervillain team of the same name. The third installment in the DC Extended Universe (DCEU), it was written and directed by David Ayer and stars an ensemble cast including Will Smith, Jared Leto, Margot Robbie, Joel Kinnaman, Viola Davis, Jai Courtney, Jay Hernandez, Adewale Akinnuoye-Agbaje, Scott Eastwood, Karen Fukuhara, Ike Barinholtz, and Cara Delevingne. In the film, a secret government agency led by Amanda Waller recruits imprisoned supervillains to execute dangerous black ops missions and save the world from a powerful threat in exchange for reduced sentences.",
        release_date: new Date("2016-01-01"),
        director_id: 3
    },
    {
        title: "Guardians of The Galaxy",
        description: "Guardians of the Galaxy (retroactively referred to as Guardians of the Galaxy Vol. 1)[4][5] is a 2014 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 10th film in the Marvel Cinematic Universe (MCU). Directed by James Gunn, who wrote the screenplay with Nicole Perlman, the film features an ensemble cast including Chris Pratt, Zoe Saldaña, Dave Bautista, Vin Diesel, and Bradley Cooper as the titular Guardians, along with Lee Pace, Michael Rooker, Karen Gillan, Djimon Hounsou, John C. Reilly, Glenn Close, and Benicio del Toro. In the film, Peter Quill and a group of extraterrestrial criminals go on the run after stealing a powerful artifact.",
        release_date: new Date("2014-01-01"),
        director_id: 3
    },
    {
        title: "Mr & Mrs Smith",
        description: "A husband and wife struggle to keep their marriage alive until they realise they are both secretly working as assassins. Now, their respective assignments require them to kill each other.",
        release_date: new Date("2005-01-01"),
        director_id: 4
    },
    {
        title: "Focus",
        description: "Nicky (Will Smith), a veteran con artist, takes a novice named Jess (Margot Robbie) under his wing. While Nicky teaches Jess the tricks of the trade, the pair become romantically involved; but, when Jess gets uncomfortably close, Nicky ends their relationship. Three years later, Nicky is in Buenos Aires working a very dangerous scheme when Jess -- now an accomplished femme fatale -- unexpectedly shows up. Her appearance throws Nicky for a loop at a time when he cannot afford to be off his game.",
        release_date: new Date("2015-01-01"),
        director_id: 5
    },
    {
        title: "Fight Club",
        description: "Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a \"fight club\" with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a destitute woman, Marla Singer (Bonham Carter).",
        release_date: new Date("1999-01-01"),
        director_id: 6
    },
    {
        title: "Pirates of the Caribbean",
        description: "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save Turner's love, Elizabeth Swann, from cursed pirates led by Jack's mutinous former first mate, Hector Barbossa. Jack wants revenge against Barbossa, who left him stranded on an island before stealing his ship, the Black Pearl, along with 882 pieces of cursed Aztec Gold.",
        release_date: new Date("2003-01-01"),
        director_id: 7
    },
    {
        title: "The Avengers",
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        release_date: new Date("2012-01-01"),
        director_id: 8
    },
    {
        title: "Dead Silence",
        description: "A young widower returns to his hometown to search for answers to his wife's murder, which may be linked to the ghost of a deceased ventriloquist.",
        release_date: new Date("2007-01-01"),
        director_id: 9
    },
    {
        title: "Fast and Furious",
        description: "A spate of high-speed robberies in LA brings street racer Dominic Toretto and his crew under the LAPD scanner. FBI agent Brian goes undercover and befriends Toretto in a bid to investigate the matter.",
        release_date: new Date("2001-01-01"),
        director_id: 9
    },
    {
        title: "Baywatch",
        description: "Lifeguard Mitch Buchannon and his team discover a drug racket involving businesswoman Victoria Leeds and decide to unearth the truth and bring the perpetrators to justice.",
        release_date: new Date("2017-01-01"),
        director_id: 10
    },
    {
        title: "Extraction",
        description: "A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord. But in the murky underworld of weapons dealers and drug traffickers, an already deadly mission approaches the impossible..",
        release_date: new Date("2020-01-01"),
        director_id: 10
    },
    {
        title: "Forrest Gump",
        description: "Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.",
        release_date: new Date("2020-01-01"),
        director_id: 11
    },
]

const genresToMovies = [
    {
        movie_id: 1,
        genre_id: 8
    },
    {
        movie_id: 2,
        genre_id: 3
    },
    {
        movie_id: 2,
        genre_id: 11
    },
    {
        movie_id: 3,
        genre_id: 1
    },
    {
        movie_id: 3,
        genre_id: 5
    },
    {
        movie_id: 4,
        genre_id: 1
    },
    {
        movie_id: 5,
        genre_id: 1
    },
    {
        movie_id: 5,
        genre_id: 8
    },
    {
        movie_id: 6,
        genre_id: 3
    },
    {
        movie_id: 6,
        genre_id: 9
    },
    {
        movie_id: 7,
        genre_id: 1
    },
    {
        movie_id: 7,
        genre_id: 9
    },
    {
        movie_id: 8,
        genre_id: 2
    },
    {
        movie_id: 8,
        genre_id: 3
    },
    {
        movie_id: 8,
        genre_id: 1
    },
    {
        movie_id: 9,
        genre_id: 10
    },
    {
        movie_id: 10,
        genre_id: 7
    },
    {
        movie_id: 10,
        genre_id: 12
    },
    {
        movie_id: 11,
        genre_id: 1
    },
    {
        movie_id: 11,
        genre_id: 12
    },
    {
        movie_id: 12,
        genre_id: 13
    },
    {
        movie_id: 13,
        genre_id: 1
    },
    {
        movie_id: 14,
        genre_id: 3
    },
]

const actorsToMovies = [
    {
        actor_id: 1,
        movie_id: 1
    },
    {
        actor_id: 1,
        movie_id: 2
    },
    {
        actor_id: 2,
        movie_id: 2
    },
    {
        actor_id: 2,
        movie_id: 3
    },
    {
        actor_id: 3,
        movie_id: 3
    },
    {
        actor_id: 7,
        movie_id: 3
    },
    {
        actor_id: 9,
        movie_id: 4
    },
    {
        actor_id: 10,
        movie_id: 4
    },
    {
        actor_id: 6,
        movie_id: 5
    },
    {
        actor_id: 8,
        movie_id: 5
    },
    {
        actor_id: 2,
        movie_id: 6
    },
    {
        actor_id: 3,
        movie_id: 6
    },
    {
        actor_id: 6,
        movie_id: 7
    },
    {
        actor_id: 5,
        movie_id: 8
    },
    {
        actor_id: 2,
        movie_id: 8
    },
    {
        actor_id: 11,
        movie_id: 8
    },
    {
        actor_id: 12,
        movie_id: 9
    },
    {
        actor_id: 13,
        movie_id: 9
    },
    {
        actor_id: 14,
        movie_id: 10
    },
    {
        actor_id: 15,
        movie_id: 11
    },
    {
        actor_id: 16,
        movie_id: 11
    },
    {
        actor_id: 17,
        movie_id: 12
    },
    {
        actor_id: 18,
        movie_id: 12
    },
    {
        actor_id: 9,
        movie_id: 13
    },
    {
        actor_id: 4,
        movie_id: 14
    },
]

async function main(){
    console.log('Seeding started...')
    console.log();

    console.log("Creating genres...");
    await prisma.genres.createMany({
        data: genres
    })

    console.log();
    console.log('Creating directors...');
    await prisma.directors.createMany({
        data: directors
    })

    console.log();
    console.log('Creating actors...');
    await prisma.actors.createMany({
        data: actors
    })

    console.log();
    console.log('Creating movies...');
    await prisma.movies.createMany({
        data: movies
    })

    console.log();
    console.log('Assigning genres to movies...');
    await prisma.genresToMovies.createMany({
        data: genresToMovies
    })

    console.log();
    console.log('Assigning actors to movies...');
    await prisma.actorsToMovies.createMany({
        data: actorsToMovies
    })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })