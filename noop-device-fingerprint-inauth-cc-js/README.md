This folder contains versions of a long-deprecated InAuth device fingerprinting script.
I actually checked the references from the footer, and most of the websites are _not loading_ this script anymore.
InAuth is long gone, and even if it is still used, it seems like the code would not break if `clientInformation` appears or disappears, as it's only using it to calculate some side effects.
Basically, it checks a list of globals, and generates a unique fingerprint based on the combination of things that are provided in the current context. `clientInformation` is just one of those things, and it wouldn't really break the whole process, although existing fingerprints will become invalid, but that can also happen for all kinds of reasons.
