import { useRouter } from "next/router";

export default function SlugPage() {
    const router = useRouter();
    console.log(router.query.slug);

    return (
        <div>Posts: {router.query.slug}</div>
    )
}