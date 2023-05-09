<template>
    <div class="wrapper">
        <div class="title">
            Project 3:<br/>Finding Stores Application
        </div>
        <div class="overview">
            <div class="ptitle">Project Overview</div>
            <div class="pbody">
                <br/><b>The Product:</b> This application was developed by a group of stay at home parents who all shared the stress of having to
                find stores to meet their needs off the vast addresses on ones search engine.        
                <br/><b>Project Duration:</b> January 2023 - May 2023
                <br/><b>The Problem:</b> Not everyone has the time to sift through numerous stores to find the one they want or need that is within
                their budget.
                <br/><b>The Goal:</b> THe ShopFind app offers a place where someone can easily locate a store based off what they sell, their location,
                or their products cost.
                <br/><b>My Role:</b> UX Designer, UX Researcher
                <br/><b>Responsibilities:</b> develop an application that can be used on a desktop or mobile device that allows users to find stores
                they desire<br/>
            </div>
        </div>

        <div class="users">
            <div class="utitle">Understanding the User</div>
            <div class="ubody">
                <b>Summary</b>
                <br/>We conducted surveys to see what people thought would be the easiest or most productive way to find stores online. We found that
                busy parents find that having to search on a massive search engine takes a while which added more stress to their day. This led to the
                desire to make an application that provided all one needs to know about shops in one place.
            </div>
        </div>

        <div class="persons">
            <div class="titleuser">User Personas</div>
            <div class="upersonas1">
                <b>Persona 1</b>
                <br/><b>Name:</b> Grace
                <br/><i>“Shopping is fun, but having a big family means shopping on a budget.”</i>
                <br/><br/><b>About</b>
                <br/>She is a 35 year old stay at home mom who lives in Town1, USA. She lives with her husband, mother, and 5 kids.
                <br/>Grace enjoys being able to spend as much time with her kids to see them grow. She gets the added help from her mother who lives with
                her. As being the caretaker for her family, she tries to give them the best while not spending unnecessary money. She would like a place to
                be able to find a variety of stores to glance from without having to jump from site to site to be able to find which meets her needs.
                <br/><br/><b>Goals:</b>
                <br/>“I want to be able to know what stores are around my family to know what I can work with.
                <br/><br/><b>Frustrations:</b>
                <br/>“I don't always have the time to sit at a computer looking at several different sites for the best deals and products."        
            </div>
        </div>

        <div class="prototypes">
            <div class="prtitle">
                Usability Study
            </div>
            <div class="prfind">            
                <br/><b>Study Type:</b> Unmoderated usability study
                <br/><b>Location:</b> Township, USA, Remote
                <br/><b>Participants:</b> 20 participants ages 18 to 60
                <br/><b>Length:</b> 30 minutes
                <br/><br/><b>Findings</b>
                <br/>-I wish it was also accessible on a mobile device, instead of only on a desktop.
                <br/>-Users wished there were more stores to view that offered a greater difference between each.
                <br/><br/><b>Accessibility Considerations</b>
                <br/>-Convert desktop application to a mobile application as well to be able to include more users
                <br/>-Added more than just 2 stores in each category.
                <br/><br/><b>Prototypes</b><br/>
                <a href="https://xd.adobe.com/view/8b591360-2d68-49b0-a332-32be381ad0a9-de0a/screen/62ab517b-027f-4130-99eb-40ade417f71b?fullscreen">Click for Low-Fidelity Prototype<br/></a>
                <a href="https://xd.adobe.com/view/7fc72af6-924a-4514-8821-eda9b6afda2a-2a94/screen/62ab517b-027f-4130-99eb-40ade417f71b?fullscreen">Click for High-Fidelity Prototype<br/></a>
            </div>
        </div>

        <div class="conclusion">
            <div class="ctitle">Key Takeaways & Next Steps</div>
            <div class="takeaways">            
                <br/><b>Impact</b>
                <br/>After following recommendations from out study participants, we were able to redesign and make an application tthat allows users to be able to
                navigate the application to find the stores they please.
                <br/><br/><b>What I Learned</b>
                <br/>I learned that some users dont always have access to a desktop device and would like to have an application they can access from their phone as well.
            </div>
            <div class="next">
                <br/><b>Next Steps</b>
                <br/>-Add more stores.
                <br/>-Maybe add GPS or map locations to help users see distance.
            </div>
        </div>  
    </div>

</template>

<style scoped lang="postcss">
.wrapper {
    @apply flex flex-col container mx-auto py-5 gap-4;
}
.title {
        @apply rounded-md bg-blue-200 p-10 text-slate-900 text-center italic font-bold text-3xl;
    }
.overview{
     @apply rounded-md bg-blue-200 py-5 px-3 text-slate-900 italic font-bold text-xl;
     .ptitle {
        @apply text-center text-2xl font-bold underline;
     }
}
.users {
     @apply rounded-md bg-blue-200 py-5 px-3 text-slate-900 italic font-bold text-xl;
     .utitle {
        @apply text-center text-2xl font-bold underline;
     }
}
.persons {
     @apply rounded-md bg-blue-200 py-5 px-3 text-slate-900 italic font-bold text-xl;
     .titleuser{
        @apply text-center text-2xl font-bold underline;
     }
}
.prototypes {
     @apply rounded-md bg-blue-200 py-5 px-3 text-slate-900 italic font-bold text-xl;
    .prtitle{
        @apply text-center text-2xl font-bold underline;
    }
}
.conclusion {
     @apply rounded-md bg-blue-200 py-5 px-3 text-slate-900 italic font-bold text-xl;
     .ctitle{
        @apply text-center text-2xl font-bold underline;
     }
}
</style>