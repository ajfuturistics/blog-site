export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="my-4 flex justify-center items-center">
      <div
        className="w-12 h-12 rounded-full animate-spin
      border-4 border-solid border-green-500 border-t-transparent"
      ></div>
    </section>
  );
}
