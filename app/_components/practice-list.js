import PracticeLink from "./practice-link";

export default function PracticeList() {
    return(
        <div className="text-lg mt-5 mr-50">
            <p className="text-cyan-600 font-bold text-xl">Practice</p>
            <p>
                Week 4: &nbsp;
                <PracticeLink link="./week-4/functions/" practice={"Functions"} />
                <PracticeLink link="./week-4/counter/" practice={"Counter"} />
            </p>
            
        </div>
    );
}