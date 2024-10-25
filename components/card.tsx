import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Link} from "@nextui-org/link";

export default function CardComponent({ post, isPreview }: { post: any, isPreview: boolean }) {

    return (
        <Link href={'/' + post.id} className="w-full hover:cursor-pointer">
            <Card className="w-full">
                <CardHeader className="flex justify-between items-center bg-cardHeader">
                    <h2 className="font-bold">{post.title}</h2>
                    <div className="flex gap-2 w-max bg-cardUser rounded-xl p-2">
                        <span className="w-max">User {post.userId}</span>
                    </div>
                </CardHeader>
                <CardBody className="bg-cardBody">
                    <p className={isPreview ? 'overflow-hidden overflow-ellipsis whitespace-nowrap' : undefined}>{post.body}</p>
                </CardBody>
            </Card>
        </Link>
    )
}