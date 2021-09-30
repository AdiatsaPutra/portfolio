import Link from "next/link";

const Button = (props) => {
    return (
        <div>
            <Link href={props.linkTo}>
                <button className="font-poppins transition duration-500 out border-2 border-indigo-500 hover:bg-indigo-700 hover:border-indigo-700 hover:shadow-lg transform hover:-translate-y-1 hover:scale-110 px-10 py-3 xl:px-14 xl:py-5 rounded-lg lg:text-xl uppercase">
                    <p>{props.text}</p>
                </button>
            </Link>
        </div>
    );
}

export default Button;