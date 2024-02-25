function showClasses() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('class-selection').style.display = 'block';
    document.querySelector('.welcome-page').classList.add('hidden');
    document.getElementById('class-selection').classList.remove('hidden');
}

function showSubjects(classNumber) {
    document.getElementById('class-selection').style.display = 'none';
    document.getElementById('subject-selection').style.display = 'block';
    localStorage.setItem('classNumber', classNumber);
}

function showTopic(subject) {
    var classNumber = parseInt(localStorage.getItem('classNumber'));
    var topic = '';
    var story = " ";

    if (classNumber === 5) {
        if (subject === 'Science') {
            topic = 'Microbes';
            story =  ["Once upon a time, in a tiny village nestled between rolling hills and whispering streams, there lived a curious young girl"+
            "named Lily. Lily loved exploring the world around her, from the buzzing bees in the meadow to the towering trees in the forest."+
            "But there was one thing she couldn't see with her eyes alone, something so small yet so important: microbes."+
            "One sunny day, Lily's teacher, Mrs. Finch, decided to take the class on a special journey to uncover the mysteries of these"+ 
            "tiny creatures. They gathered in the school garden, where Mrs. Finch held up a handful of soil."+
            "Class, she said with a smile, what do you think is hiding in this soil?"+
            "Lily and her classmates exchanged puzzled glances. They knew about worms and bugs, but what else could be lurking beneath the surface?"+
            "These are microbes! Mrs. Finch exclaimed, her eyes twinkling with excitement. Microbes are tiny living things that are too small"+
            "to see without a microscope. They're like the tiniest superheroes of nature!"+
            "Lily's eyes widened in amazement. But what do they do? she asked."+
            "Well, Lily, Mrs. Finch replied, microbes are everywhere, and they play many important roles in our world."+
            "Some microbes help plants grow by breaking down dead leaves and other organic matter into nutrients that plants can use."+
            "Others help make delicious foods like yogurt and cheese. And some even help us stay healthy by fighting off harmful germs!"+
            "Lily nodded, starting to understand. So, microbes are like little helpers that do big jobs in nature and for us?"+
            "Exactly! Mrs. Finch exclaimed, beaming at her. And just like any superhero, we need to treat them with kindness and respect. "+
            "That means washing our hands, taking care of the environment, and not using too many harsh chemicals that can harm them."+
            "As the class continued their exploration, Lily couldn't help but marvel at the hidden world of microbes beneath her feet."+
            "From that day on, she looked at the world with newfound wonder, knowing that even the tiniest creatures could make"+
            "the biggest difference. And with a smile on her face, she promised to be a friend to all the microbes she met along the way."];

        } else if (subject === 'Maths') {
            topic = 'Addition and Substraction';
            story = ["Once upon a time, in a magical land called Mathland, there lived two friends named Addy and Subby." +
            "Addy loved to add things together to make them bigger, while Subby enjoyed subtracting to find out how much was left." +
            "One sunny morning, Addy and Subby decided to go on an adventure to explore the enchanted forest of numbers." +
            "As they journeyed through the forest, they encountered all sorts of creatures and challenges."+
            "Their first challenge was to cross a bridge guarded by a giant troll named Plus. Plus challenged them with an addition problem: " +
            "If you have 3 apples and I give you 2 more, how many apples do you have altogether? Addy quickly replied, 3 plus 2 equals 5!" +
            "With that, Plus was impressed and allowed them to pass." +
            "Next, they came across a river guarded by a mischievous goblin named Minus. Minus wanted to test their subtraction skills and asked" +
            "If you have 8 cookies and you eat 3 of them, how many cookies are left? Subby thought for a moment and said,"+
            "8 minus 3 equals 5! The goblin nodded in approval, and they safely crossed the river."+
            "As they continued their journey, they encountered more challenges that required them to use their addition and subtraction skills."+
            "They added and subtracted stars, candies, and even magical gems along the way, always helping each other whenever they got stuck."+
            "Finally, after a day full of adventures, Addy and Subby reached the end of the forest, where they found a treasure chest" +
            "filled with golden coins. Together, they counted the coins using their newfound math skills and shared them equally." +
            "With smiles on their faces, Addy and Subby realized that math was not just about numbers but also about teamwork and" +
            "problem-solving. And so, they returned home, ready to face any math challenge that came their way."];
        }
    } else if (classNumber === 6) {
        if (subject === 'Science') {
            topic = 'Living Organisms and their Environment';
            story = ["In a lush, green forest nestled between towering trees and bubbling streams, there existed a bustling community of"+
            "living organisms."+
            "Each day, the forest hummed with the sounds of chirping birds, buzzing insects, and rustling leaves, all part of a vibrant ecosystem"+ 
            "teeming with life."+
            "Deep within the heart of the forest, where sunlight filtered through the canopy in dappled patterns, lived a curious young"+
            "explorer named Lily. Lily had always been fascinated by the world around her, and she spent her days wandering through the forest,"+
            "eager to uncover its secrets."+
            "One bright morning, as she wandered along a winding path, Lily stumbled upon a patch of vibrant flowers blooming amidst a "+
            "carpet of emerald moss. Intrigued, she crouched down to get a closer look and was amazed to discover a bustling world of activity"+
            "hidden within the petals."+
            "Tiny insects darted from flower to flower, collecting nectar to feed their families. Bees buzzed lazily, their legs heavy"+
            "with pollen as they danced from blossom to blossom, pollinating the plants and ensuring their continued growth. Even smaller"+ 
            "creatures, like ants and beetles, scurried about, busily tending to their homes and gathering food for the winter months ahead."+
            "As Lily watched in wonder, she realized that the forest was not just a collection of trees and plants but a vast interconnected"+
            "web of life, where every living organism played a vital role in maintaining the delicate balance of nature."+
            "Further along the path, Lily came across a babbling brook, its crystal-clear waters teeming with fish and other aquatic creatures."+
            "Frogs leaped from lily pad to lily pad, while dragonflies flitted gracefully above the water's surface. On the banks of the stream,"+
            "towering trees provided shelter for birds and squirrels, while their roots anchored the soil, preventing erosion and providing a"+
            "stable environment for other plants to grow."+
            "As she wandered deeper into the forest, Lily encountered even more fascinating creatures – from majestic deer grazing in sun-dappled"+ 
            "clearings to elusive foxes darting through the underbrush. Each one played a unique role in the ecosystem, contributing"+
            "to the rich tapestry of life that surrounded her."+
            "By the time Lily returned home, she was filled with a newfound appreciation for the wonders of the natural world."+ 
            "She realized that living organisms were not just individual creatures but integral parts of a larger whole, each one"+ 
            "interconnected and dependent on the others for survival."+
            "And so, armed with her newfound knowledge, Lily vowed to do her part to protect and preserve the forest and"+
            "all its inhabitants, ensuring that future generations could continue to marvel at its beauty and diversity for years to come."];

        } else if (subject === 'Maths') {
            topic = 'Fractions';
            story = ["Once upon a time, in a quaint little village nestled between rolling hills and blooming meadows, there lived" +
            "a young boy named Jack. Jack loved to spend his days exploring the countryside, discovering hidden treasures and embarking on"+ 
            "exciting adventures."+
            "One sunny afternoon, while wandering through the village market, Jack stumbled upon a wondrous sight a gleaming golden pie,"+ 
            "freshly baked and steaming hot, displayed in the window of Mrs. Smith's bakery. The pie looked absolutely delicious, with its "+
            "flaky crust and mouthwatering aroma wafting through the air."+
            "Unable to resist temptation, Jack decided to buy a slice of the pie to enjoy as a special treat. As Mrs. Smith cut a generous"+
            "portion and handed it to him, Jack couldn't help but marvel at the perfectly symmetrical slice, divided into equal parts like"+
            "slices of a puzzle."+
            "With each bite, Jack savored the sweet taste of the pie, but he couldn't help but wonder how could he describe the portion"+
            "he had eaten in terms of fractions?"+
            "Curious to learn more, Jack decided to seek out the village mathematician, Professor Wise, who lived in a cozy cottage"+
            "at the edge of the forest. Knocking on the professor's door, Jack eagerly asked for his help in understanding fractions."+
            "Professor Wise welcomed Jack inside and invited him to sit by the fireplace, where a pot of tea was brewing. With a twinkle in"+ 
            "his eye, the professor began to explain the concept of fractions using the magical pie as an example."+
            "Imagine the whole pie as one whole, said Professor Wise, gesturing to a drawing of a pie on the table.Each slice represents"+
            "a fraction of the whole. For example, if the pie is divided into eight equal slices, and you eat one slice, you have eaten one"+ 
            "eighth of the pie."+
            "ack's eyes widened in understanding as he pictured the pie divided into equal parts in his mind. Suddenly, fractions didn't"+
            "seem so mysterious anymore they were simply ways of describing parts of a whole, just like slices of a pie!"+
            "Armed with his newfound knowledge, Jack thanked Professor Wise for his help and headed back to the village, feeling excited to"+ 
            "share what he had learned with his friends."+
            "From that day on, whenever Jack saw a pie or any other object divided into equal parts, he couldn't help but smile, knowing that"+
            "he now understood the magical world of fractions one slice at a time."+
            "And so, with a heart full of curiosity and a mind full of wonder, Jack continued his adventures, eager to explore the world"+
            "of math and uncover its many mysteries."];
        }
    }

    document.getElementById('subject-selection').style.display = 'none';
    document.getElementById('topic-display').style.display = 'block';
    document.getElementById('topic').innerText = topic;
    document.getElementById('story').innerText = story;
}
function goToHomepage() {
    window.location.reload();
}











