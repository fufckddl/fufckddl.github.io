package com.changryul.portfolio.model;

import java.util.List;

public record PortfolioResponse(
    Profile profile,
    Hero hero,
    About about,
    List<Project> projects,
    List<Experience> experiences,
    List<InfoSection> experienceDetails,
    List<SkillGroup> skills,
    Contact contact) {

  public record Profile(String name, String brand, String role, List<String> navigation) {}

  public record Hero(String title, String description, String primaryAction, String secondaryAction) {}

  public record About(
      String title,
      String description,
      List<String> summary,
      List<AboutMetric> metrics,
      List<Capability> capabilities) {}

  public record AboutMetric(String value, String label) {}

  public record Capability(String title, String description, String icon) {}

  public record Project(
      String name,
      String description,
      String category,
      String purpose,
      String role,
      List<String> implementation,
      List<String> verification,
      String result,
      List<String> tags,
      String visualType,
      String href,
      List<ProjectLink> links) {}

  public record ProjectLink(String label, String href) {}

  public record Experience(String title, String description, String period, String projectName) {}

  public record InfoSection(String title, List<InfoItem> items) {}

  public record InfoItem(String title, String description, String period, String meta) {}

  public record SkillGroup(String title, List<String> items) {}

  public record Contact(String title, List<ContactAction> actions) {}

  public record ContactAction(String label, String href, String type) {}
}
