import PracticeLink from "./practice-link";

export default function PracticeList() {
    return(
        <div className="text-lg mt-5 mr-50">
            <p className="text-cyan-600 font-bold text-xl">Practice</p>
            <p>
                Week 4: &nbsp;
                <PracticeLink link="./week-4/functions/" practice={"Functions"} />
                <PracticeLink link="./week-4/counter/" practice={"Counter"} />
                <br/>
                Week 5: &nbsp;
                <PracticeLink link="./week-5/week-5-practice/" practice={"Managed Form"} />
                <br/>
                Week 6: &nbsp;
                <PracticeLink link="./week-6/arrays/" practice={"Arrays"} />
                <PracticeLink link="./week-6/contact/" practice={"Contact"} />
                <br/>
                Week 7: &nbsp;
                <PracticeLink link="./week-7/week-7-practice/" practice={"Managing State"}/>
            </p>
            
        </div>
    );
}