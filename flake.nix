{
  description = "Jekyll website template";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        formatter = pkgs.nixpkgs-fmt;
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.ruby
            pkgs.jekyll
            pkgs.rubyPackages.jekyll-redirect-from
            pkgs.rubyPackages.github-pages
          ];
        };

        packages.default = pkgs.stdenv.mkDerivation {
          name = "snugg.ie";
          src = ./.;
          buildInputs = [
            pkgs.ruby
            pkgs.jekyll
            pkgs.rubyPackages.jekyll-redirect-from
            pkgs.rubyPackages.github-pages
          ];
          buildPhase = ''
            jekyll build
          '';
          installPhase = ''cp -r _site $out'';
        };
      });
}
