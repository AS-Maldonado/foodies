import Link from "next/link";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
  const meals = getMeals();
  return (
    <>
      <div className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it youself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </div>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
