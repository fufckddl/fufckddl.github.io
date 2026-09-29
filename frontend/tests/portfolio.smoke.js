// Run this function with a Playwright page opened on the portfolio preview.
export default async function verifyPortfolio(page) {
  for (const width of [1440, 744, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.reload({ waitUntil: "networkidle" });
    const result = await page.evaluate(async () => {
      const images = [...document.querySelectorAll(".project-media img")];
      images.forEach((image) => { image.loading = "eager"; });
      await Promise.all(images.map((image) => image.decode().catch(() => {})));
      const activityImages = [...document.querySelectorAll("#activities img")];
      activityImages.forEach((image) => { image.loading = "eager"; });
      await Promise.all(activityImages.map((image) => image.decode().catch(() => {})));
      return {
        navigation: [...document.querySelectorAll("header nav a")].map((link) => link.textContent),
        activities: [...document.querySelectorAll("#activities h3")].map((title) => title.textContent),
        activityPeriods: [...document.querySelectorAll(".activity-period")].map((period) => period.textContent),
        activityPhotos: activityImages.length === 2 && activityImages.every((image) => image.naturalWidth > 0)
          && activityImages[0].src.endsWith("hoseo-sw-volunteer.webp")
          && activityImages[1].src.endsWith("hoseo-supporters.jpg"),
        duplicatedVolunteer: document.querySelector("#experience").textContent.includes("호서SW교육봉사단"),
        covers: images.length === 8 && images.every((image) => image.naturalWidth > 0 && image.src.endsWith("-v2.jpg")),
        overflow: document.documentElement.scrollWidth > innerWidth,
      };
    });
    if (result.navigation.join() !== "소개,경험,활동,스킬,프로젝트,연락"
      || result.activities.join() !== "호서SW교육봉사단,호서서포터즈"
      || result.activityPeriods.join() !== "2024.03.30 ~ 2025.11.29,2023.03.10 ~ 2025.01.24"
      || !result.activityPhotos
      || result.duplicatedVolunteer || !result.covers || result.overflow) {
      throw new Error(`${width}px portfolio regression: ${JSON.stringify(result)}`);
    }
  }
  return "Activities, navigation, eight covers, and overflow checks passed at 1440/744/390px";
}
